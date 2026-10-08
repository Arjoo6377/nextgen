import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CARE_EMAIL, PLANS } from '../site-content';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Pricing</p>
    <h1>Choose your broadband plan.</h1>
    <p>Unbeatable speeds at unbeatable prices. 100 Mbps fiber is ₹1,500 a month. 200 Mbps is ₹3,000. GST is excluded.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="band event-cta leased-choice">
      <div>
        <p class="eyebrow">Pricing for Leased Line</p>
        <h2>A leased line is quoted for your business.</h2>
        <p>A leased line is a dedicated connection that is not shared with other customers. It does not have a fixed price on this page. Talk to us means the contact form, so we can tell you the price for your address and the speed you need.</p>
      </div>
      <a class="btn primary" routerLink="/contact" [queryParams]="{ interest: 'Leased line' }">Talk to us</a>
    </div>
    <div class="plans five">
      @for (plan of plans; track plan.speed) {
        <article class="plan" [class.popular]="plan.popular">
          @if (plan.popular) { <span class="badge">Popular</span> }
          <h3>{{ plan.speed }}</h3>
          <p class="fit">{{ plan.fit }}</p>
          <p class="price">₹{{ plan.price }} <small>/ month*</small></p>
          <ul>
            <li>Unlimited data</li>
            <li>{{ plan.speed }} speed</li>
            <li>99.99% uptime</li>
            <li>Secured internet</li>
            <li>24/7 support</li>
          </ul>
          <button type="button" class="btn primary full" (click)="prefill(plan.speed)">Get it now</button>
        </article>
      }
    </div>
    <p class="note">*GST excluded. After installation, the monthly rental of the plan you choose applies. The minimum contract is one month.</p>
  </div>
</section>

<section class="section soft" id="enquire">
  <div class="container contact-grid">
    <div>
      <p class="eyebrow">Let’s get in touch</p>
      <h2>Have an idea, or need a new connection?</h2>
      <p>Tell us the speed you want. Higher speeds such as 300 Mbps, 500 Mbps and 1 Gbps can be requested here even when they are not on the price cards.</p>
    </div>
    <form class="form-card" (submit)="send($event)">
      <label>Name<input name="name" required [(ngModel)]="form.name"></label>
      <label>Phone<input name="phone" required [(ngModel)]="form.phone"></label>
      <label>Email<input name="email" type="email" required [(ngModel)]="form.email"></label>
      <label>Message<textarea name="message" rows="4" [(ngModel)]="form.message"></textarea></label>
      <button class="btn primary full" type="submit">Submit</button>
      @if (sent) { <p class="success">Your email app should open with this enquiry to {{ email }}.</p> }
    </form>
  </div>
</section>
`
})
export class PricingComponent {
  plans = PLANS;
  email = CARE_EMAIL;
  sent = false;
  form = { name: '', phone: '', email: '', message: 'I would like a new Nextgen connection.' };

  prefill(speed: string): void {
    this.form.message = `I would like the ${speed} plan.`;
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
  }

  send(event: Event): void {
    event.preventDefault();
    const body = `Name: ${this.form.name}\nPhone: ${this.form.phone}\nEmail: ${this.form.email}\n\n${this.form.message}`;
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent('New connection enquiry')}&body=${encodeURIComponent(body)}`;
    this.sent = true;
  }
}
