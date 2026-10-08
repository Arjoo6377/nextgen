import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENT_BRIEF, EVENT_FAQS, EVENT_OPTIONS, EVENT_SIZING, EVENT_STEPS, EVENT_WHATSAPP } from '../event-wifi';
import { EventNavComponent } from '../shared/event-nav.component';

@Component({
  selector: 'app-event-planner',
  standalone: true,
  imports: [RouterLink, EventNavComponent],
  template: `
<section class="page-hero plan-hero">
  <div class="container">
    <p class="eyebrow">Plan your event network</p>
    <h1>From the first call to de-rig.</h1>
    <p>What happens after you contact us, what we need from you, and how we decide how much network the event needs.</p>
    <div class="actions">
      <a class="btn primary" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp your requirement</a>
      <a class="btn ghost" routerLink="/contact" [queryParams]="{ interest: 'Event Connectivity' }">Request a site survey</a>
    </div>
  </div>
</section>
<app-event-nav />

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our process</p>
      <h2>Six steps, one accountable team.</h2>
    </div>
    <div class="event-steps">
      @for (step of steps; track step.title; let i = $index) {
        <article class="info-card">
          <img class="card-photo" [src]="step.image" [alt]="step.title">
          <span>{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container split">
    <div>
      <p class="eyebrow">What to send us</p>
      <h2>The details that let us quote accurately.</h2>
      <p>You do not need all of this in the first message. The more we know, the faster the design and quote.</p>
      <ul class="brief-list">
        @for (item of brief; track item[0]) {
          <li><strong>{{ item[0] }}</strong> {{ item[1] }}</li>
        }
      </ul>
    </div>
    <article class="info-card navy-card">
      <h3>Not sure what you need?</h3>
      <p>Send the venue and a rough footfall. We’ll suggest a zone list and the right deployment option, and a survey will confirm the rest. Final pricing is itemised per point after the site survey.</p>
      <a class="btn primary" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp us</a>
    </article>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How we size a network</p>
      <h2>Different activities need different networks.</h2>
      <p>Each part of the event is sized for what it actually does.</p>
    </div>
    <div class="table-wrap">
      <table class="event-table">
        <thead>
          <tr><th>Activity</th><th>What it demands</th><th>How we design for it</th></tr>
        </thead>
        <tbody>
          @for (row of sizing; track row[0]) {
            <tr><td><strong>{{ row[0] }}</strong></td><td>{{ row[1] }}</td><td>{{ row[2] }}</td></tr>
          }
        </tbody>
      </table>
    </div>
    <div class="cards two" style="margin-top: 18px">
      @for (option of options; track option.title) {
        <article class="info-card">
          <img class="card-photo" [src]="option.image" [alt]="option.title">
          <h3>{{ option.title }}</h3>
          <p>{{ option.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">FAQ</p>
      <h2>Questions event organisers ask.</h2>
    </div>
    <div class="faq">
      @for (item of faqs; track item.q; let i = $index) {
        <article>
          <button type="button" (click)="open = open === i ? -1 : i" [attr.aria-expanded]="open === i">{{ item.q }}</button>
          @if (open === i) { <p>{{ item.a }}</p> }
        </article>
      }
    </div>
  </div>
</section>
`
})
export class EventPlannerComponent {
  steps = EVENT_STEPS;
  brief = EVENT_BRIEF;
  sizing = EVENT_SIZING;
  options = EVENT_OPTIONS;
  faqs = EVENT_FAQS;
  whatsapp = EVENT_WHATSAPP;
  open = 0;
}
