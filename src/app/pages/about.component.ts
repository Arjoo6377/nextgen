import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENT_WHATSAPP } from '../event-wifi';
import { PHONE_DISPLAY } from '../site-content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">About NextGen Broadband</p>
    <h1>A licensed ISP and network design house, built for networks that cannot fail.</h1>
    <p>Since 2014, NextGen has connected homes, campuses, enterprises and some of India's biggest live events — on a network we own, design and monitor ourselves.</p>
    <div class="actions">
      <a class="btn primary" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp Us</a>
      <a class="btn ghost" routerLink="/about" fragment="networks">See our range of networks</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container about-story">
    <div>
      <p class="eyebrow">Our story</p>
      <h2>From a Gurugram ISP to the network behind India's biggest shows</h2>
      <div class="prose">
        <p>NextGen Broadband was founded in 2014 on a simple principle: communication needs have moved from necessity to innovation, and the people who depend on the network deserve a provider who treats uptime as the product.</p>
        <p>We began as a home and business broadband provider on Sohna Road, Gurugram, and grew into something broader — a licensed Internet Service Provider and an IT infrastructure design house. That means we plan, engineer, deploy and monitor the network end to end, from RF design and redundancy architecture to structured cabling and 24×7 NOC supervision.</p>
        <p>Our event work has been the proving ground. Concerts, festivals, corporate gatherings and esports tournaments leave no room for a dropped connection, and the discipline that requires — dual-redundant links, sub-second failover, ring-fenced bandwidth — is now built into every NextGen deployment, from a single home to a stadium.</p>
      </div>
    </div>
    <div class="about-stats">
      @for (item of storyStats; track item.label) {
        <article>
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      }
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Licensed and regulated</p>
      <h2>A Licensed Internet Service Provider</h2>
      <p>NextGen is a licensed Internet Service Provider under the Department of Telecommunications (DoT), and also holds an Access Service licence. Our services are provided in compliance with TRAI regulations and licence conditions.</p>
    </div>
    <article class="band about-licence">
      <div class="about-seal">DoT</div>
      <div>
        <h3>Licensed Internet Service Provider — Department of Telecommunications</h3>
        <p>Internet service provision is a regulated activity in India. Being a licensed ISP means our network, our service terms and our quality commitments sit inside a regulated framework — not a reseller arrangement on someone else's licence. We also hold an Access Service licence.</p>
      </div>
    </article>
    <div class="cards four">
      @for (item of licencePoints; track item.title) {
        <article class="info-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section" id="networks">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">A wide range of networks</p>
      <h2>One company, every kind of connectivity</h2>
      <p>Most providers do one thing. We design and run everything from a single home connection to ISP-grade backbones and temporary stadium networks.</p>
    </div>
    <div class="cards four">
      @for (item of networks; track item.title) {
        <article class="info-card">
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
      <p class="eyebrow">From a single home to a stadium</p>
      <h2>The same engineering, at every scale</h2>
    </div>
    <div class="about-scale">
      @for (item of scales; track item.tag) {
        <article>
          <span class="tag">{{ item.tag }}</span>
          <strong>{{ item.value }}</strong>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our proving ground</p>
      <h2>Live events: where we earned our standards</h2>
      <p>Concerts, festivals, tours, corporate events and tournaments — environments where a failed connection is seen by thousands, immediately.</p>
    </div>
    <div class="about-proof">
      @for (item of proof; track item.label) {
        <article>
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      }
    </div>
    <div class="chips about-chips">
      @for (name of clients; track name) {
        <span [class.featured]="featuredClients.includes(name)">{{ name }}</span>
      }
    </div>
    <p class="about-actions">
      <a routerLink="/events" class="btn primary">Our event capability</a>
      <a routerLink="/events/projects" class="btn ghost-dark">See all clients</a>
    </p>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our journey</p>
      <h2>Ten years of building networks people rely on</h2>
    </div>
    <div class="about-journey">
      @for (item of journey; track item.year) {
        <article>
          <span class="year">{{ item.year }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cards two">
      <article class="info-card">
        <p class="eyebrow">Our mission</p>
        <h3>To give every client a decisive communication edge</h3>
        <p>Engineering premium, dedicated bandwidth and infrastructure with a standard of quality and reliability built for clients who cannot accept downtime.</p>
      </article>
      <article class="info-card navy-card">
        <p class="eyebrow">Our vision</p>
        <h3>To be India's preferred infrastructure partner</h3>
        <p>For mission-critical environments — offering intelligent, vendor-independent design on cutting-edge technology, with zero-compromise client satisfaction.</p>
      </article>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Capabilities</p>
      <h2>Two disciplines, one accountable vendor</h2>
      <p>A 24×7 Network Operations Centre stands behind every deployment we run.</p>
    </div>
    <div class="cards four">
      @for (item of capabilities; track item.title) {
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
    <div class="band">
      <div class="section-head">
        <p class="eyebrow">Why we win</p>
        <h2>What clients choose us for</h2>
      </div>
      <div class="cards four about-win">
        @for (item of reasons; track item.title) {
          <article>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        }
      </div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Looking ahead</p>
      <h2>Our strategic objectives</h2>
    </div>
    <div class="about-journey about-objectives">
      @for (item of objectives; track item.step) {
        <article>
          <span class="year">{{ item.step }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="band event-cta">
      <div>
        <h2>Let's build your network</h2>
        <p>Home, office, campus, concert or ISP backbone — tell us what you need and our team will respond.</p>
      </div>
      <div class="actions">
        <a class="btn ghost" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp {{ phone }}</a>
        <a routerLink="/contact" class="btn primary">Send an enquiry</a>
      </div>
    </div>
  </div>
</section>
`
})
export class AboutComponent {
  whatsapp = EVENT_WHATSAPP;
  phone = PHONE_DISPLAY;
  storyStats = [
    { value: '2014', label: 'Founded in Gurugram' },
    { value: '10+ yrs', label: 'Experience' },
    { value: 'Licensed', label: 'ISP under the Department of Telecommunications' },
    { value: '24×7', label: 'Network operations centre' }
  ];
  licencePoints = [
    { title: 'Own network, own accountability', body: 'We run the network from POP to premises, so one team answers for uptime — not a chain of subcontractors.' },
    { title: 'Regulated service standards', body: 'Services are delivered under TRAI regulations and licence conditions, with quality standards we aim to exceed.' },
    { title: 'Presence across multiple states', body: 'We deliver Wi-Fi setups Pan India — events, campuses and enterprise sites in multiple states, not only the Delhi-NCR region where we are based.' },
    { title: 'Enterprise-ready by design', body: 'Dedicated bandwidth, SLAs and defined escalation — the structure businesses, schools and event organisers need.' }
  ];
  networks = [
    { title: 'FTTH home broadband', body: 'Fiber-to-the-home with unlimited data and symmetric speeds, backed by a local support team.' },
    { title: 'Dedicated leased lines', body: 'Point-to-point, ring-fenced bandwidth for offices, builder sites, retail and warehouses.' },
    { title: 'Enterprise and corporate networks', body: 'Routers, managed switches, VLAN segmentation, structured cabling and Wi-Fi/RF design across your floor plate.' },
    { title: 'School and campus networks', body: 'Campus-wide Wi-Fi and fiber backbones for classrooms, labs, hostels and admin blocks.' },
    { title: 'Concert and live-event networks', body: 'Temporary, high-density networks and Wi-Fi hotspots across entry, revenue and production zones.' },
    { title: 'Esports and broadcast networks', body: 'Zero-tolerance-latency, dedicated-bandwidth builds for tournaments and live broadcast.' },
    { title: 'ISP-grade network design', body: 'We have designed 40+ ISP-grade networks at 50 Gbps+ capacity — vendor-independent and built on current technology.' },
    { title: 'Voice and cable TV', body: 'Triple-play options: advanced voice with unlimited calling, and 500+ digital TV channels.' }
  ];
  scales = [
    { tag: 'Home', value: '50 Mbps – 1 Gbps', body: 'FTTH plans for homes and small offices.' },
    { tag: 'Business and campus', value: 'Dedicated lines', body: 'Symmetric, ring-fenced bandwidth with optional live NMS.' },
    { tag: 'Live events', value: '3 Gbps · 1,00,000+ users', body: 'Dedicated bandwidth and single-venue crowds handled live.' },
    { tag: 'ISP-grade', value: '50 Gbps+', body: '40+ networks designed at carrier scale.' }
  ];
  proof = [
    { value: '10+ yrs', label: 'Event-grade experience' },
    { value: '1,00,000+', label: 'Concurrent users, single event' },
    { value: '3 Gbps', label: 'Dedicated bandwidth, major esports event' },
    { value: '100+', label: 'Events for the Government of India' },
    { value: '99.99%', label: 'Uptime SLA capability' }
  ];
  featuredClients = ['Lollapalooza India', 'Ed Sheeran', 'BookMyShow Live Events', 'Sunburn Festival', 'Nodwin Gaming'];
  clients = [
    'Lollapalooza India', 'Ed Sheeran', 'BookMyShow Live Events', 'Sunburn Festival',
    'Sahitya Aaj Tak', 'DJ Snake', 'Martin Garrix', 'Illenium & Blanke', 'Hardwell',
    'Alan Walker', 'Armin van Buuren', 'AP Dhillon', 'Honey Singh',
    'Microsoft India Events', 'Google Events', 'Nodwin Gaming'
  ];
  journey = [
    { year: '2014', title: 'NextGen is founded', body: 'A licensed ISP launched in Gurugram, with quality and customer satisfaction as the core benchmarks.' },
    { year: '2016', title: 'Esports-grade networks', body: 'We begin delivering dedicated-bandwidth, zero-tolerance-latency networks for Nodwin Gaming — a partnership that continues in Delhi and Mumbai.' },
    { year: '2023–24', title: 'Wi-Fi hotspots for revenue', body: 'UPI hotspot connectivity at BookMyShow festivals and Sahitya Aaj Tak, with reported increases in counter sales.' },
    { year: '2025', title: 'Live-event deployments at scale', body: 'Full on-ground networks for BookMyShow Live Events, alongside Lollapalooza India and tours by Ed Sheeran and Karan Aujhla.' },
    { year: 'Today', title: 'Gurugram, NCR, Haryana and Pan India', body: 'Dense fiber coverage across Gurugram, with enterprise, leased-line and event reach across NCR and Haryana, plus Wi-Fi setups in multiple states across India.' }
  ];
  capabilities = [
    { title: 'Carrier-grade ISP', body: 'Licensed internet service provider — FTTH, dedicated leased lines and ring-fenced bandwidth for enterprise clients.' },
    { title: 'Network and RF design', body: 'Site survey, RF/frequency planning and structured network architecture, engineered against exact point-wise specifications.' },
    { title: 'Infrastructure deployment', body: 'Enterprise-grade routers, managed switches, structured cabling and UPS/power backup — supplied, installed and configured end to end.' },
    { title: 'Monitoring and assurance', body: 'Live NOC dashboards, 24×7 monitoring, incident response and structured post-deployment reporting on every project.' }
  ];
  reasons = [
    { title: 'End-to-end ownership', body: 'Complete ownership from POP to premises — one accountable vendor, not a chain of subcontractors.' },
    { title: 'Proven under pressure', body: 'Battle-tested on live events and esports broadcasts, not just theoretical SLAs.' },
    { title: '99.99% uptime SLA', body: 'Guaranteed performance delivered to the LAN, with defined breach remediation and rapid escalation.' },
    { title: 'Transparent pricing', body: 'Premium service at reasonable, itemised rates — and no security deposit on broadband connections.' }
  ];
  objectives = [
    { step: '1', title: 'Market leadership', body: 'Becoming the preferred infrastructure partner for corporate and live-event clients across India through superior service delivery.' },
    { step: '2', title: 'Technology innovation', body: 'Continuous investment in the latest network design tools and infrastructure to keep an engineering-led advantage.' },
    { step: '3', title: 'Customer-centric growth', body: 'Expanding our service footprint while keeping an uncompromising commitment to client satisfaction and support.' },
    { step: '4', title: 'Deeper local reach', body: 'Extending our own fiber and field resources across Gurugram, and deepening enterprise and event reach across NCR and Haryana.' }
  ];
}
