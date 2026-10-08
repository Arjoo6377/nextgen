import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ConnectService } from './connect.service';
import { CARE_EMAIL, ENQUIRY_PLANS } from '../site-content';

@Component({
  selector: 'app-connect-panel',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
@if (connect.open()) {
  <div class="drawer-backdrop" (click)="connect.hide()"></div>
  <aside class="drawer" role="dialog" aria-labelledby="connect-title">
    <div class="drawer-top">
      <p class="eyebrow">Nextgen World</p>
      <button type="button" class="drawer-close" (click)="connect.hide()" aria-label="Close">Close</button>
    </div>
    <h2 id="connect-title">Lightning-fast internet, arranged around you.</h2>
    <div class="drawer-links">
      <a routerLink="/pay-bill" (click)="connect.hide()">Pay bill</a>
      <a routerLink="/speed-test" (click)="connect.hide()">Speed test</a>
      <a routerLink="/pricing" (click)="connect.hide()">View plans</a>
    </div>
    <div class="tabs">
      <button type="button" [class.selected]="tab === 'home'" (click)="tab = 'home'">Home user</button>
      <button type="button" [class.selected]="tab === 'business'" (click)="tab = 'business'">Business user</button>
    </div>

    @if (tab === 'home') {
      <form (submit)="sendHome($event)">
        <label>Name<input name="name" required [(ngModel)]="home.name"></label>
        <label>Mobile<input name="mobile" required [(ngModel)]="home.mobile"></label>
        <label>Email<input name="email" type="email" required [(ngModel)]="home.email"></label>
        <label>Plan
          <select name="plan" [(ngModel)]="home.plan">
            @for (plan of plans; track plan) { <option [value]="plan">{{ plan }}</option> }
          </select>
        </label>
        <label>Location<input name="location" required [(ngModel)]="home.location"></label>
        <button class="btn primary full" type="submit">Send</button>
      </form>
    } @else {
      <form (submit)="sendBusiness($event)">
        <label>Name<input name="name" required [(ngModel)]="business.name"></label>
        <label>Mobile<input name="mobile" required [(ngModel)]="business.mobile"></label>
        <label>Email<input name="email" type="email" required [(ngModel)]="business.email"></label>
        <label>Company name<input name="company" required [(ngModel)]="business.company"></label>
        <label>Designation<input name="designation" [(ngModel)]="business.designation"></label>
        <label>Location<input name="location" required [(ngModel)]="business.location"></label>
        <button class="btn primary full" type="submit">Send</button>
      </form>
    }
    @if (sent) {
      <p class="success">Your email app should open with this request addressed to {{ email }}. Send that message and the team can follow up.</p>
    }
  </aside>
}
<button type="button" class="assist" (click)="connect.show()">Get connected</button>
`
})
export class ConnectPanelComponent {
  connect = inject(ConnectService);
  email = CARE_EMAIL;
  plans = ENQUIRY_PLANS;
  tab: 'home' | 'business' = 'home';
  sent = false;
  home = { name: '', mobile: '', email: '', plan: ENQUIRY_PLANS[1], location: '' };
  business = { name: '', mobile: '', email: '', company: '', designation: '', location: '' };

  sendHome(event: Event): void {
    event.preventDefault();
    this.mail('New home connection', this.home);
  }

  sendBusiness(event: Event): void {
    event.preventDefault();
    this.mail('New business connection', this.business);
  }

  private mail(subject: string, fields: Record<string, string>): void {
    const body = Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.sent = true;
  }
}
