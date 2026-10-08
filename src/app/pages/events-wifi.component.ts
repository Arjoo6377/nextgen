import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENT_COMPARE, EVENT_KINDS, EVENT_LAYERS, EVENT_OPTIONS, EVENT_WHATSAPP } from '../event-wifi';
import { EventNavComponent } from '../shared/event-nav.component';

@Component({
  selector: 'app-events-wifi',
  standalone: true,
  imports: [RouterLink, EventNavComponent],
  template: `
<section class="page-hero events-hero">
  <div class="container">
    <p class="eyebrow">Event and concert Wi-Fi</p>
    <h1>Wi-Fi and internet that keep an event selling, streaming and running.</h1>
    <p>From a single coupon counter to a full festival ground. Nextgen designs, deploys, monitors and removes the event network, as a licensed ISP.</p>
    <div class="actions">
      <a class="btn primary" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp your event details</a>
      <a class="btn ghost" routerLink="/events/hotspots">See how concert hotspots work</a>
    </div>
  </div>
</section>
<app-event-nav />

<section class="section">
  <div class="container" style="max-width: 760px">
    <p class="eyebrow">Why event networks fail</p>
    <h2>A crowd of thousands is the hardest network there is.</h2>
    <div class="prose">
      <p>Phone networks inside a packed venue slow to a crawl. UPI payments time out at the coupon counter. The production team cannot upload. The entry gate cannot validate tickets.</p>
      <p>The fix is a network designed around how the event actually runs: separate paths for payments, entry, public Wi-Fi and production, with a second link that takes over if the first one fails.</p>
      <a routerLink="/events/hotspots" class="text-link">See the hotspot walk-through</a>
    </div>
  </div>
</section>

<section class="section" style="padding-top: 0">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Events we power</p>
      <h2>Built for every kind of live event.</h2>
    </div>
    <div class="cards four">
      @for (kind of kinds; track kind.title) {
        <article class="info-card">
          <img class="card-photo" [src]="kind.image" [alt]="kind.title">
          <h3>{{ kind.title }}</h3>
          <p>{{ kind.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we deliver</p>
      <h2>Six layers of event connectivity, one accountable team.</h2>
      <p>Pick one layer or take the whole stack. Everything is designed to the venue, the point list and the event schedule.</p>
    </div>
    <div class="cards three">
      @for (layer of layers; track layer.title) {
        <article class="info-card">
          <img class="card-photo" [src]="layer.image" [alt]="layer.title">
          <h3>{{ layer.title }}</h3>
          <p>{{ layer.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Why Nextgen</p>
      <h2>A licensed ISP, not a rental middleman.</h2>
    </div>
    <div class="table-wrap">
      <table class="event-table">
        <thead>
          <tr><th></th><th>Typical rental-only setups</th><th>Nextgen Broadband</th></tr>
        </thead>
        <tbody>
          @for (row of compare; track row[0]) {
            <tr><td><strong>{{ row[0] }}</strong></td><td>{{ row[1] }}</td><td>{{ row[2] }}</td></tr>
          }
        </tbody>
      </table>
    </div>
    <p class="note center-link">The middle column is a checklist of questions to ask any provider. Nextgen’s scope is agreed in each proposal.</p>
    <p class="center-link"><a routerLink="/events/projects" class="text-link">See events and projects delivered</a></p>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Two deployment options</p>
      <h2>Sized to the event.</h2>
    </div>
    <div class="cards two">
      @for (option of options; track option.title; let i = $index) {
        <article class="info-card" [class.navy-card]="i === 1">
          <img class="card-photo" [src]="option.image" [alt]="option.title">
          <h3>{{ option.title }}</h3>
          <p>{{ option.body }}</p>
        </article>
      }
    </div>
    <p class="center-link"><a routerLink="/events/plan" class="btn primary">Plan your event network</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="band event-cta">
      <div>
        <p class="eyebrow">Planning a concert, festival or tournament?</p>
        <h2>Send the venue, dates, footfall and zone list.</h2>
        <p>We’ll come back with a point-by-point design and an itemised quote.</p>
      </div>
      <div class="actions">
        <a class="btn primary" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp us</a>
        <a class="btn ghost" routerLink="/contact" [queryParams]="{ interest: 'Event Connectivity' }">Request a site survey</a>
      </div>
    </div>
  </div>
</section>
`
})
export class EventsWifiComponent {
  layers = EVENT_LAYERS;
  kinds = EVENT_KINDS;
  compare = EVENT_COMPARE;
  options = EVENT_OPTIONS;
  whatsapp = EVENT_WHATSAPP;
}
