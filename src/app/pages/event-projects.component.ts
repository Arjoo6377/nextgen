import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENT_CASES, EVENT_CATEGORIES, EVENT_ROSTER, EVENT_STATS, EVENT_TIMELINE, EVENT_WHATSAPP, EventCategory } from '../event-wifi';
import { EventNavComponent } from '../shared/event-nav.component';

@Component({
  selector: 'app-event-projects',
  standalone: true,
  imports: [RouterLink, EventNavComponent],
  template: `
<section class="page-hero projects-hero">
  <div class="container">
    <p class="eyebrow">Events and projects</p>
    <h1>The shows, festivals and tournaments we’ve powered.</h1>
    <p>International tours, India’s biggest festivals, ticketing-platform deployments, corporate events and esports — on networks we designed and ran.</p>
  </div>
</section>
<app-event-nav />

<section class="section">
  <div class="container proof-grid event-stats">
    @for (stat of stats; track stat.label) {
      <div><b>{{ stat.value }}</b><span>{{ stat.label }}</span></div>
    }
    <div><b>{{ roster.length }}</b><span>Named events and clients listed below</span></div>
  </div>
</section>

<section class="section" style="padding-top: 0">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Timeline</p>
      <h2>Ten years of live-event deployments.</h2>
    </div>
    <div class="cards four">
      @for (item of timeline; track item.year) {
        <article class="info-card">
          <img class="card-photo" [src]="item.image" [alt]="item.title">
          <p class="eyebrow">{{ item.year }} · {{ item.tag }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Case studies</p>
      <h2>Three deployments in detail.</h2>
    </div>
    <div class="cards three">
      @for (item of cases; track item.title) {
        <article class="info-card">
          <img class="card-photo" [src]="item.image" [alt]="item.title">
          <p class="eyebrow">{{ item.year }}</p>
          <h3>{{ item.title }}</h3>
          <ul class="brief-list">
            @for (point of item.points; track point) { <li>{{ point }}</li> }
          </ul>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Full list</p>
      <h2>Events, tours and clients.</h2>
      <p>Filter by type. This is the named list from the company profile.</p>
    </div>
    <div class="filter-bar" role="group" aria-label="Filter events by type">
      @for (cat of categories; track cat.id) {
        <button type="button" [class.active]="active === cat.id" (click)="active = cat.id" [attr.aria-pressed]="active === cat.id">
          {{ cat.label }} <span>{{ count(cat.id) }}</span>
        </button>
      }
    </div>
    <div class="chips">
      @for (item of shown; track item.name) {
        <span [class.featured]="item.featured">{{ item.name }}</span>
      }
    </div>
    <p class="center-link">{{ shown.length }} shown. And many more across concerts, festivals, corporate gatherings and tournaments.</p>
  </div>
</section>

<section class="section" style="padding-top: 0">
  <div class="container">
    <div class="band event-cta">
      <div>
        <p class="eyebrow">Your event could be next</p>
        <h2>Tell us the venue, dates and what has to stay online.</h2>
        <p>Payments, entry, public Wi-Fi, production — we’ll design it around the event.</p>
      </div>
      <div class="actions">
        <a class="btn primary" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp us</a>
        <a class="btn ghost" routerLink="/events/plan">Plan your event network</a>
      </div>
    </div>
  </div>
</section>
`
})
export class EventProjectsComponent {
  stats = EVENT_STATS;
  timeline = EVENT_TIMELINE;
  cases = EVENT_CASES;
  categories = EVENT_CATEGORIES;
  roster = EVENT_ROSTER;
  whatsapp = EVENT_WHATSAPP;
  active: 'all' | EventCategory = 'all';

  get shown() {
    return this.active === 'all' ? this.roster : this.roster.filter(item => item.cat === this.active);
  }

  count(id: 'all' | EventCategory): number {
    return id === 'all' ? this.roster.length : this.roster.filter(item => item.cat === id).length;
  }
}
