import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CARE_EMAIL, OFFICE_LINES, OFFICE_NAME, PHONE_DISPLAY, PHONE_TEL, SOCIALS } from '../site-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
<footer>
  <div class="container footer-grid">
    <div>
      <a routerLink="/" class="brand light">
        <img class="brand-logo" src="/images/nextgen-logo.png" alt="Nextgen Broadband">
      </a>
      <p>Fiber broadband, leased lines and network services for homes and businesses in Gurugram and beyond.</p>
      <div class="socials">
        @for (s of socials; track s.href) {
          <a [href]="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
        }
      </div>
    </div>
    <div>
      <h4>Explore</h4>
      <a routerLink="/">Home</a>
      <a routerLink="/services">Services</a>
      <a routerLink="/events">Event Wi-Fi</a>
      <a routerLink="/pricing">Pricing</a>
      <a routerLink="/about">About Us</a>
      <a routerLink="/speed-test">Speed Test</a>
    </div>
    <div>
      <h4>Customer</h4>
      <a routerLink="/pay-bill">Pay Bill</a>
      <a routerLink="/login">Customer login</a>
      <a routerLink="/support">Help and support</a>
      <a routerLink="/contact">Contact us</a>
    </div>
    <div>
      <h4>Contact</h4>
      <a [href]="'mailto:' + email">{{ email }}</a>
      <a [href]="'tel:' + phoneTel">{{ phone }}</a>
      <p class="address"><b>{{ office }}</b><br>{{ lines[0] }}<br>{{ lines[1] }},<br>{{ lines[2] }}</p>
    </div>
  </div>
  <div class="container legal-row">
    <a routerLink="/privacy-policy">Privacy Policy</a>
    <a routerLink="/cookie-policy">Cookie Policy</a>
    <a routerLink="/terms">Terms and Conditions</a>
    <a routerLink="/refund">Refund and Cancellation</a>
  </div>
  <div class="container copyright">Copyright © {{ year }} Nextgen Broadband Pvt. Ltd.</div>
</footer>`
})
export class FooterComponent {
  email = CARE_EMAIL;
  phone = PHONE_DISPLAY;
  phoneTel = PHONE_TEL;
  office = OFFICE_NAME;
  lines = OFFICE_LINES;
  socials = SOCIALS;
  year = new Date().getFullYear();
}
