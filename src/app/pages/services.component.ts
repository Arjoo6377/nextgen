import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS, FOCUS, SERVICES } from '../site-content';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero services-hero">
  <div class="container">
    <p class="eyebrow">Services</p>
    <h1>Networking services and solutions.</h1>
    <p>A reliable connection whenever you open a laptop or tablet, on Wi‑Fi built for the way you actually use it.</p>
  </div>
</section>

<section class="section">
  <div class="container service-stage">
    @for (service of services; track service.title; let i = $index) {
      <article class="service-card" [class.lead]="i === 0">
        <img class="service-photo" [src]="service.image" [alt]="service.title">
        <div class="service-copy">
          <h2>{{ service.title }}</h2>
          <p>{{ service.body }}</p>
        </div>
        <a [routerLink]="i === 0 ? '/pricing' : '/contact'" class="text-link">
          {{ i === 0 ? 'See plans' : 'Talk to us' }}
        </a>
      </article>
    }
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our focus is on quality</p>
      <h2>The right connection matters to the business.</h2>
      <p>Quality service is what lets a business grow.</p>
    </div>
    <div class="cards four">
      @for (item of focus; track item.title) {
        <article class="info-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Frequently asked questions</p>
      <h2>Answers before you call.</h2>
    </div>
    <div class="faq">
      @for (item of faqs; track item.q; let i = $index) {
        <article>
          <button type="button" (click)="open = open === i ? -1 : i" [attr.aria-expanded]="open === i">
            {{ item.q }}
          </button>
          @if (open === i) { <p>{{ item.a }}</p> }
        </article>
      }
    </div>
    <p class="center-link"><a routerLink="/pricing" class="text-link">Check all plans</a></p>
  </div>
</section>
`
})
export class ServicesComponent {
  services = SERVICES;
  focus = FOCUS;
  faqs = FAQS;
  open = 0;
}
