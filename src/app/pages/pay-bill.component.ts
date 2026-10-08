import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CARE_EMAIL, CUSTOMER_PORTAL, PHONE_DISPLAY, PHONE_TEL } from '../site-content';

@Component({
  selector: 'app-pay-bill',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Pay bill</p>
    <h1>Pay your Nextgen bill online.</h1>
    <p>Use a credit card, debit card or net banking from your customer account. Bills live in the My Bill section.</p>
  </div>
</section>
<section class="section">
  <div class="container pay-grid">
    <div class="form-card">
      <h2>Open My Bill</h2>
      <ol class="steps">
        <li>Go to the customer portal.</li>
        <li>Sign in with your account.</li>
        <li>Open <b>My Bill</b> and pay by card or net banking.</li>
      </ol>
      <a class="btn primary full" [href]="portal" target="_blank" rel="noopener">Go to customer portal</a>
      <p class="note">The portal opens at user.nextgenbroadband.in. Keep that login private.</p>
    </div>
    <div>
      <p class="eyebrow">Need a hand?</p>
      <h2>Change a plan or ask about a bill.</h2>
      <div class="contact-item">
        <b>Helpline</b>
        <p><a [href]="'tel:' + phoneTel">{{ phone }}</a></p>
      </div>
      <div class="contact-item">
        <b>Email</b>
        <p><a [href]="'mailto:' + email">{{ email }}</a></p>
      </div>
      <a routerLink="/support" class="text-link">Read billing questions</a>
    </div>
  </div>
</section>
`
})
export class PayBillComponent {
  portal = CUSTOMER_PORTAL;
  phone = PHONE_DISPLAY;
  phoneTel = PHONE_TEL;
  email = CARE_EMAIL;
}
