import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CLIENTS, PLANS, SERVICES, TESTIMONIALS, VALUES, CARE_EMAIL } from '../site-content';
import { ConnectService } from '../shared/connect.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
<section class="hero">
  <div class="orb orb-a"></div>
  <div class="orb orb-b"></div>
  <div class="container hero-grid">
    <div>
      <p class="eyebrow">Get connected. Stay connected.</p>
      <h1>A whole new way to <span>connect.</span></h1>
      <p class="lede">Connecting to what you love has never mattered more. Nextgen is changing browsing from something you put up with into the connection your home actually needs.</p>
      <div class="actions">
        <a routerLink="/pricing" class="btn primary">Discover plans</a>
        <button type="button" class="btn ghost" (click)="connect.show()">New connection</button>
      </div>
    </div>
    <aside class="hero-card">
      <p class="eyebrow">Featured offer</p>
      <h2>100 Mbps fiber</h2>
      <p class="price">₹1,500 <small>/ month*</small></p>
      <div class="speed-line" aria-hidden="true"><span></span></div>
      <p>Not fast enough? 200 Mbps is ₹3,000 a month.</p>
      <ul>
        <li>Unlimited data</li>
        <li>Secured internet</li>
        <li>GST excluded</li>
      </ul>
      <a routerLink="/pricing" class="btn primary full">Choose a plan</a>
    </aside>
  </div>
</section>

<section class="proof" aria-label="Why Nextgen">
  <div class="container proof-grid">
    <div><b>Unlimited</b><span>Data on every home plan</span></div>
    <div><b>99.99%</b><span>Uptime on every plan</span></div>
    <div><b>24/7</b><span>Support when you need it</span></div>
    <div><b>From ₹800</b><span>Monthly plans, GST extra</span></div>
  </div>
</section>

<section class="section">
  <div class="container story-layout">
    <img class="story-photo" src="images/story-life.jpg" alt="Working from home on a Nextgen connection">
    <div class="split">
      <div>
        <p class="eyebrow">Our story</p>
        <h2>Started with ambition and a dream about a better life.</h2>
      </div>
      <div class="prose">
        <p>We’re building a Wi‑Fi network that works, and we want you on it.</p>
        <p>Connect to the things that matter. The network is there for safer, smarter and more secure everyday experiences, at home and at work.</p>
        <a routerLink="/about" class="text-link">Read about Nextgen</a>
      </div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we offer</p>
      <h2>Keep calm and connect to Wi‑Fi that does not let you down.</h2>
    </div>
    <div class="cards bento">
      @for (service of services; track service.title) {
        <article class="info-card">
          <img class="card-photo" [src]="service.image" [alt]="service.title">
          <h3>{{ service.title }}</h3>
          <p>{{ service.summary }}</p>
          <a routerLink="/services" class="text-link">Explore</a>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="band event-cta">
      <img class="event-cta-photo" src="images/events/event-hero.jpg" alt="Concert crowd at a Nextgen event">
      <div>
        <p class="eyebrow">Event and concert Wi-Fi</p>
        <h2>Keep ticket gates, payments and the show online.</h2>
        <p>Temporary Wi-Fi and dedicated internet for concerts, festivals, corporate events and tournaments.</p>
      </div>
      <a routerLink="/events" class="btn primary">Explore event Wi-Fi</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Plans</p>
      <h2>Unbeatable speeds at clear prices.</h2>
      <p>Get 100 Mbps fiber for ₹1,500 a month, or 200 Mbps for ₹3,000. GST is extra.</p>
    </div>
    <div class="plans">
      @for (plan of featured; track plan.speed) {
        <article class="plan" [class.popular]="plan.popular">
          @if (plan.popular) { <span class="badge">Popular</span> }
          <h3>{{ plan.speed }}</h3>
          <p class="price">₹{{ plan.price }} <small>/ month*</small></p>
          <p>{{ plan.fit }}</p>
          <a routerLink="/pricing" class="btn primary full">Get it now</a>
        </article>
      }
    </div>
  </div>
</section>

<section class="section comments">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">They trust us</p>
      <h2>A right decision can make a big difference.</h2>
      <p>Switch to Nextgen Broadband.</p>
    </div>
    <div class="logo-row">
      @for (client of clients; track client) { <span>{{ client }}</span> }
    </div>
    <div class="comment-grid">
      @for (item of testimonials; track item.name; let i = $index) {
        <figure class="quote" [class.featured]="i === 1">
          <div class="quote-head">
            <span class="stars" aria-label="Rated 5 out of 5">
              @for (star of stars; track star) {
                <svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 1.6 12.5 6.7l5.6.8-4 3.9.95 5.5L10 14.3 4.95 17l.95-5.5-4-3.9 5.6-.8L10 1.6z"/></svg>
              }
            </span>
          </div>
          <blockquote>{{ item.quote }}</blockquote>
          <figcaption>
            <span class="avatar" aria-hidden="true">{{ initials(item.name) }}</span>
            <span>
              <strong>{{ item.name }}</strong>
              <small>Home customer</small>
            </span>
          </figcaption>
        </figure>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our values</p>
      <h2>The power of Nextgen Broadband</h2>
    </div>
    <div class="cards three">
      @for (value of values; track value.title) {
        <article class="info-card">
          <h3>{{ value.title }}</h3>
          <p>{{ value.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
  <div class="newsletter band">
    <div>
      <p class="eyebrow">Newsletter</p>
      <h2>News and insight on how people connect.</h2>
      <p>Sign up and we’ll open an email to {{ email }} so you can join the list.</p>
    </div>
    <form (submit)="subscribe($event)">
      <label class="sr-only" for="news-email">Email address</label>
      <input id="news-email" type="email" name="email" required placeholder="Enter your email address" [(ngModel)]="newsEmail">
      <button class="btn primary" type="submit">Sign up</button>
    </form>
  </div>
  </div>
</section>
`
})
export class HomeComponent {
  connect = inject(ConnectService);
  services = SERVICES;
  featured = PLANS.filter(plan => plan.speed === '100 Mbps' || plan.speed === '200 Mbps');
  clients = CLIENTS;
  testimonials = TESTIMONIALS;
  stars = [1, 2, 3, 4, 5];
  values = VALUES;
  email = CARE_EMAIL;
  newsEmail = '';

  initials(name: string): string {
    return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  }

  subscribe(event: Event): void {
    event.preventDefault();
    const body = `Please add me to the Nextgen Broadband newsletter.\nEmail: ${this.newsEmail}`;
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(body)}`;
  }
}
