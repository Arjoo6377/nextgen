import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../emailjs.config';
import {
  ABUSE_EMAILS, CARE_EMAIL, GRIEVANCE_EMAIL, GRIEVANCE_NAME,
  OFFICE_LINES, OFFICE_NAME, PHONE_DISPLAY, PHONE_TEL
} from '../site-content';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Contact us</p>
    <h1>Tell us how to get back to you.</h1>
    <p>Support, a new connection, or a complaint — use the details below and we can take it from there.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="cards four">
      <article class="info-card">
        <h3>Support</h3>
        <p><a [href]="'mailto:' + email">{{ email }}</a></p>
        <p><a [href]="'tel:' + phoneTel">{{ phone }}</a></p>
      </article>
      <article class="info-card">
        <h3>Grievance officer</h3>
        <p>{{ officer }}</p>
        <p><a [href]="'mailto:' + grievanceEmail">{{ grievanceEmail }}</a></p>
      </article>
      <article class="info-card">
        <h3>Abuse</h3>
        @for (address of abuseEmails; track address) {
          <p><a [href]="'mailto:' + address">{{ address }}</a></p>
        }
      </article>
      <article class="info-card office-card">
        <h3>Office</h3>
        <p><b>{{ office }}</b><br>{{ lines[0] }}<br>{{ lines[1] }},<br>{{ lines[2] }}</p>
      </article>
    </div>
  </div>
</section>
<section class="section soft">
  <div class="container contact-grid">
    <div>
      <p class="eyebrow">Write to us</p>
      <h2>Have an idea or need a new connection?</h2>
      <p>What you type is sent to the support team.</p>
    </div>
    <form class="form-card" (submit)="send($event)">
      <div class="form-row">
        <label>Name<input name="name" required [(ngModel)]="form.name"></label>
        <label>Phone<input name="phone" [(ngModel)]="form.phone"></label>
      </div>
      <label>Email<input name="email" type="email" required [(ngModel)]="form.email"></label>
      <label>Subject
        <select name="subject" [(ngModel)]="form.subject">
          <option>General enquiry</option>
          <option>New connection</option>
          <option>Business services</option>
          <option>Leased line</option>
          <option>Billing</option>
          <option>Support</option>
          <option>Event connectivity</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows="5" required [(ngModel)]="form.message"></textarea></label>
      <button class="btn primary full" type="submit" [disabled]="sending">{{ sending ? 'Sending…' : 'Submit' }}</button>
      @if (sent) { <p class="success">Your message has been sent.</p> }
      @if (error) { <p class="form-error">{{ error }}</p> }
    </form>
  </div>
</section>
`
})
export class ContactComponent {
  email = CARE_EMAIL;
  phone = PHONE_DISPLAY;
  phoneTel = PHONE_TEL;
  officer = GRIEVANCE_NAME;
  grievanceEmail = GRIEVANCE_EMAIL;
  abuseEmails = ABUSE_EMAILS;
  office = OFFICE_NAME;
  lines = OFFICE_LINES;
  private readonly cdr = inject(ChangeDetectorRef);
  sending = false;
  sent = false;
  error = '';
  form = { name: '', phone: '', email: '', subject: 'General enquiry', message: '' };

  constructor() {
    const interest = inject(ActivatedRoute).snapshot.queryParamMap.get('interest') ?? '';
    if (/event/i.test(interest)) {
      this.form.subject = 'Event connectivity';
      this.form.message = 'I would like a site survey for event Wi-Fi.';
    } else if (/leased/i.test(interest)) {
      this.form.subject = 'Leased line';
      this.form.message = 'I would like pricing for a leased line.';
    }
  }

  async send(event: Event): Promise<void> {
    event.preventDefault();
    this.sending = true;
    this.sent = false;
    this.error = '';
    this.paint();
    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS is not configured');
      }
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: this.email,
            name: this.form.name,
            phone: this.form.phone || 'Not given',
            email: this.form.email,
            reply_to: this.form.email,
            subject: this.form.subject,
            message: this.form.message
          }
        })
      });
      if (!response.ok) throw new Error(await response.text());
      this.sent = true;
      this.form = { name: '', phone: '', email: '', subject: this.form.subject, message: '' };
    } catch {
      this.error = `The message could not be sent. Write directly to ${this.email}.`;
    } finally {
      this.sending = false;
      this.paint();
    }
  }

  private paint(): void {
    this.cdr.detectChanges();
  }
}
