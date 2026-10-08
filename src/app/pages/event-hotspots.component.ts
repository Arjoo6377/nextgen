import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENT_PRINCIPLES, EVENT_WALK } from '../event-wifi';
import { EventNavComponent } from '../shared/event-nav.component';

@Component({
  selector: 'app-event-hotspots',
  standalone: true,
  imports: [RouterLink, EventNavComponent],
  template: `
<section class="page-hero hotspots-hero">
  <div class="container">
    <p class="eyebrow">Concert hotspots</p>
    <h1>How a concert Wi-Fi hotspot network is built.</h1>
    <p>Why UPI payments work at the coupon counter even when thousands of phones are fighting for signal.</p>
  </div>
</section>
<app-event-nav />

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">The problem</p>
      <h2>Mobile networks and crowds don’t mix.</h2>
      <p>Put thousands of phones in one field and every tower in range is overloaded. The people most affected are the ones trying to pay.</p>
    </div>
    <div class="compare">
      <article class="info-card bad">
        <h3>Counter relying on mobile data</h3>
        <ul class="brief-list">
          <li>UPI requests time out when the crowd peaks</li>
          <li>Staff retry payments, queues grow, and people walk away</li>
          <li>No visibility into what failed, or why</li>
          <li>Lost sales that never show up in a report</li>
        </ul>
      </article>
      <article class="info-card good">
        <h3>Counter on a Nextgen hotspot</h3>
        <ul class="brief-list">
          <li>A dedicated hotspot at each counter, off the public mobile network</li>
          <li>Payment traffic on its own network</li>
          <li>Two uplinks with automatic failover</li>
          <li>Post-event reports for transactions and connectivity</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">The path</p>
      <h2>From our network to the coupon counter.</h2>
    </div>
    <div class="diagram-layout">
      <div class="flow-diagram" aria-hidden="true">
        <svg viewBox="0 0 600 880" xmlns="http://www.w3.org/2000/svg">
          <line class="d-line" x1="250" y1="86" x2="150" y2="150"/>
          <line class="d-line d-backup" x1="350" y1="86" x2="450" y2="150"/>
          <line class="d-line" x1="150" y1="196" x2="200" y2="250"/>
          <line class="d-line d-backup" x1="450" y1="196" x2="400" y2="250"/>
          <line class="d-line" x1="300" y1="334" x2="300" y2="380"/>
          <line class="d-line" x1="104" y1="420" x2="104" y2="470"/>
          <line class="d-line" x1="300" y1="420" x2="300" y2="470"/>
          <line class="d-line" x1="496" y1="420" x2="496" y2="470"/>
          <line class="d-line" x1="300" y1="646" x2="300" y2="690"/>
          <rect class="d-navy" x="170" y="16" width="260" height="70" rx="14"/>
          <text class="d-w d-lg" x="300" y="46" text-anchor="middle">Nextgen POP</text>
          <text class="d-m" x="300" y="68" text-anchor="middle">Carrier-grade ISP · 24/7 NOC</text>
          <rect class="d-box" x="60" y="150" width="180" height="46" rx="12"/>
          <text class="d-t" x="150" y="178" text-anchor="middle">Primary fiber link</text>
          <rect class="d-box d-dash" x="360" y="150" width="180" height="46" rx="12"/>
          <text class="d-t" x="450" y="178" text-anchor="middle">Backup link</text>
          <rect class="d-blue" x="80" y="250" width="440" height="84" rx="14"/>
          <text class="d-w d-lg" x="300" y="288" text-anchor="middle">Event core / server room</text>
          <text class="d-m" x="300" y="312" text-anchor="middle">Router · firewall · switches · UPS</text>
          <rect class="d-soft" x="40" y="380" width="520" height="40" rx="20"/>
          <text class="d-t" x="300" y="405" text-anchor="middle">Fiber ring / point-to-point backbone</text>
          <rect class="d-zone" x="12" y="470" width="184" height="160" rx="14"/>
          <text class="d-t" x="104" y="508" text-anchor="middle">Operations</text>
          <text class="d-s" x="104" y="548" text-anchor="middle">Box office</text>
          <text class="d-s" x="104" y="570" text-anchor="middle">Turnstiles</text>
          <text class="d-s" x="104" y="592" text-anchor="middle">Medical · help desk</text>
          <rect class="d-zone d-hot" x="208" y="470" width="184" height="160" rx="14"/>
          <text class="d-t" x="300" y="508" text-anchor="middle">Revenue</text>
          <text class="d-s" x="300" y="548" text-anchor="middle">Coupon counters</text>
          <text class="d-s" x="300" y="570" text-anchor="middle">Merch and public Wi-Fi</text>
          <text class="d-s" x="300" y="592" text-anchor="middle">Food, bar, activations</text>
          <rect class="d-zone" x="404" y="470" width="184" height="160" rx="14"/>
          <text class="d-t" x="496" y="508" text-anchor="middle">Live / working</text>
          <text class="d-s" x="496" y="548" text-anchor="middle">Production and stage</text>
          <text class="d-s" x="496" y="570" text-anchor="middle">Artist rooms</text>
          <text class="d-s" x="496" y="592" text-anchor="middle">Content teams</text>
          <rect class="d-soft" x="12" y="690" width="576" height="150" rx="16"/>
          <text class="d-t" x="36" y="724">Inside a coupon counter</text>
          <rect class="d-box" x="24" y="744" width="160" height="64" rx="12"/>
          <text class="d-t" x="104" y="782" text-anchor="middle">Counter hotspot</text>
          <rect class="d-box" x="220" y="744" width="160" height="64" rx="12"/>
          <text class="d-t" x="300" y="782" text-anchor="middle">POS / UPI device</text>
          <rect class="d-blue" x="416" y="744" width="160" height="64" rx="12"/>
          <text class="d-w" x="496" y="782" text-anchor="middle">UPI confirmed</text>
        </svg>
      </div>
      <ol class="walk">
        @for (step of walk; track step.title) {
          <li>
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </li>
        }
      </ol>
    </div>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width: 760px">
    <p class="eyebrow">Proven at the counter</p>
    <h2>Hotspots that moved real sales.</h2>
    <div class="prose">
      <p>Nextgen delivered Wi-Fi hotspot connectivity for UPI and coupon-counter transactions at BookMyShow festivals and at India Today’s Sahitya Aaj Tak, in 2023 and 2024, with reported increases in coupon-counter sales.</p>
      <p>After each event we supplied transaction and connectivity reports to the commercial team, so the impact on revenue was visible.</p>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Design principles</p>
      <h2>What we build into every hotspot network.</h2>
    </div>
    <div class="cards four">
      @for (item of principles; track item.title) {
        <article class="info-card">
          <img class="card-photo" [src]="item.image" [alt]="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
    <p class="center-link"><a routerLink="/events/plan" class="btn primary">Plan your event network</a></p>
  </div>
</section>
`
})
export class EventHotspotsComponent {
  walk = EVENT_WALK;
  principles = EVENT_PRINCIPLES;
}
