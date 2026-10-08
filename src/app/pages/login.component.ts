import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CUSTOMER_PORTAL } from '../site-content';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="login-page">
  <div class="login-visual">
    <p class="eyebrow">Customer portal</p>
    <h1>Your bills, in one sign-in.</h1>
    <p>Pay by card or net banking, review My Bill, and manage the connection from the Nextgen account portal.</p>
    <ul class="login-points">
      <li>View and pay bills</li>
      <li>Check the current plan</li>
      <li>Reach support if something looks wrong</li>
    </ul>
  </div>
  <div class="login-box">
    <h2>Sign in</h2>
    <p>Account access stays on the secure customer portal. This page does not ask for your password.</p>
    <a class="btn primary full" [href]="portal" target="_blank" rel="noopener">Continue to user.nextgenbroadband.in</a>
    <div class="login-links">
      <a routerLink="/pay-bill">How to pay a bill</a>
      <a routerLink="/contact">New here? Request a connection</a>
    </div>
  </div>
</section>
`
})
export class LoginComponent {
  portal = CUSTOMER_PORTAL;
}
