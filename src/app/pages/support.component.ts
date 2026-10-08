import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS, PHONE_DISPLAY, PHONE_TEL, CARE_EMAIL } from '../site-content';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Help and support</p>
    <h1>How can we help?</h1>
    <p>Most billing and plan questions are answered here. If yours is not, call or write and a person will pick it up.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="cards three">
      <article class="info-card">
        <h3>Pay a bill</h3>
        <p>Sign in at the customer portal and open My Bill. Cards and net banking are accepted there.</p>
        <a routerLink="/pay-bill" class="text-link">Pay bill</a>
      </article>
      <article class="info-card">
        <h3>Change your plan</h3>
        <p>Call {{ phone }} or email {{ email }}. The minimum contract is one month.</p>
        <a routerLink="/pricing" class="text-link">See plans</a>
      </article>
      <article class="info-card">
        <h3>Something is not working</h3>
        <p>Run a speed test first, then contact support with the time the problem started.</p>
        <a routerLink="/speed-test" class="text-link">Run a speed test</a>
      </article>
    </div>
    <div class="faq">
      @for (item of faqs; track item.q; let i = $index) {
        <article>
          <button type="button" (click)="open = open === i ? -1 : i" [attr.aria-expanded]="open === i">{{ item.q }}</button>
          @if (open === i) { <p>{{ item.a }}</p> }
        </article>
      }
    </div>
    <p class="center-link"><a [href]="'tel:' + phoneTel" class="btn primary">Call {{ phone }}</a></p>
  </div>
</section>
`
})
export class SupportComponent {
  faqs = FAQS;
  open = 0;
  phone = PHONE_DISPLAY;
  phoneTel = PHONE_TEL;
  email = CARE_EMAIL;
}
