<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/event-helpers.php';

$pageTitle       = 'Events & Projects Delivered — Concerts, Festivals, Corporate & Esports | NextGen Broadband';
$pageDescription = 'Every concert, festival, tour and event NextGen Broadband has powered — from Lollapalooza India and Sunburn to BookMyShow Live Events, Sahitya Aaj Tak, Microsoft and Google events.';

$roster = event_roster();
$cats   = event_categories();
$counts = ['all' => count($roster)];
foreach ($roster as $r) {
    $counts[$r[1]] = ($counts[$r[1]] ?? 0) + 1;
}
$photos = event_gallery_photos();

require_once __DIR__ . '/includes/header.php';
echo event_assets_css();
?>

<section class="page-hero">
  <div class="container page-hero__inner">
    <p class="breadcrumb"><a href="index.php">Home</a> / <a href="events-wifi.php">Event &amp; Concert Wi-Fi</a> / Events &amp; Projects</p>
    <span class="eyebrow" style="background:rgba(255,255,255,.08);color:var(--orange-400);">Events &amp; Projects Delivered</span>
    <h1>The Shows, Festivals and Tournaments We've Powered</h1>
    <p>A track record, not a pitch: international tours, India's biggest festivals, ticketing-platform deployments, corporate events and esports — all on networks we designed and ran ourselves.</p>
  </div>
  <?php echo wave_divider(); ?>
</section>

<?php echo event_subnav('event-projects.php'); ?>

<section class="section--tight">
  <div class="container">
    <div class="stat-grid stat-grid--light">
      <div class="stat-card"><strong><?php echo e((string) YEARS_EXPERIENCE); ?>+ yrs</strong><span>Event-grade deployment experience</span></div>
      <div class="stat-card"><strong>80+</strong><span>Shows &amp; events powered</span></div>
      <div class="stat-card"><strong><?php echo (int) $counts['all']; ?></strong><span>Named events &amp; clients listed below</span></div>
      <div class="stat-card"><strong>1,00,000+</strong><span>Concurrent users handled, single venue</span></div>
      <div class="stat-card"><strong>3 Gbps</strong><span>Dedicated bandwidth at a major esports event</span></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">Timeline</span>
      <h2>Ten years of live-event deployments</h2>
      <p>Milestones from our event work — each one added something to the playbook we use today.</p>
    </div>
    <div class="tl" style="--tl-cols:4;">
      <div class="tl__item">
        <div class="tl__dot">2016</div>
        <span class="tl__tag">Gaming &amp; esports</span>
        <h3>Nodwin Gaming partnership begins</h3>
        <p>Tournament-grade, zero-tolerance-latency networks with dedicated bandwidth, in Delhi and Mumbai — still running today.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">2023</div>
        <span class="tl__tag">Hotspots</span>
        <h3>BookMyShow festivals &amp; Sahitya Aaj Tak</h3>
        <p>Wi-Fi hotspot connectivity for UPI and coupon-counter transactions, with reported increases in counter sales.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">2024</div>
        <span class="tl__tag">Repeat deployment</span>
        <h3>Back for the next edition</h3>
        <p>The same hotspot approach repeated for BookMyShow festivals and Sahitya Aaj Tak, with post-event reports delivered to the commercial team.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">2025</div>
        <span class="tl__tag">Full on-ground network</span>
        <h3>BookMyShow Live Events</h3>
        <p>Complete on-ground connectivity: box office, entry and turnstiles, revenue counters, and production and artist zones on one non-overlapping design.</p>
      </div>
    </div>
  </div>
</section>

<section class="section--tint">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">Case studies</span>
      <h2>Three deployments in detail</h2>
    </div>
    <div class="grid grid--3">
      <div class="card case">
        <div class="case__year">2025</div>
        <h3>BookMyShow Live Events</h3>
        <ul>
          <li><span class="icon-tick">✔</span>Full on-ground network across operations, revenue and live zones</li>
          <li><span class="icon-tick">✔</span>Box office, entry / turnstiles and revenue counters on one design</li>
          <li><span class="icon-tick">✔</span>Production and artist zones kept on separate, high-bandwidth lines</li>
        </ul>
      </div>
      <div class="card case">
        <div class="case__year">2023–24</div>
        <h3>BookMyShow festivals &amp; Sahitya Aaj Tak</h3>
        <ul>
          <li><span class="icon-tick">✔</span>Wi-Fi hotspots at coupon and top-up counters for UPI payments</li>
          <li><span class="icon-tick">✔</span>Measurable, reported increases in coupon-counter sales</li>
          <li><span class="icon-tick">✔</span>Post-event transaction and connectivity reports as evidence of ROI</li>
        </ul>
      </div>
      <div class="card case">
        <div class="case__year">2016–now</div>
        <h3>Nodwin Gaming — gaming &amp; esports</h3>
        <ul>
          <li><span class="icon-tick">✔</span>3 Gbps of dedicated bandwidth for a major tournament</li>
          <li><span class="icon-tick">✔</span>Dual-redundant links with sub-second failover</li>
          <li><span class="icon-tick">✔</span>Ongoing partner across Delhi and Mumbai</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">Full list</span>
      <h2>Events, tours &amp; clients we've delivered for</h2>
      <p>Filter by type. This is the named list from our company profile — we've done many more.</p>
    </div>
    <div class="filter-bar" data-filter-bar role="group" aria-label="Filter events by type">
      <?php foreach ($cats as $key => $label): ?>
        <button type="button" class="filter-btn<?php echo $key === 'all' ? ' is-active' : ''; ?>" data-cat="<?php echo e($key); ?>" aria-pressed="<?php echo $key === 'all' ? 'true' : 'false'; ?>"><?php echo e($label); ?><span class="n"><?php echo (int) ($counts[$key] ?? 0); ?></span></button>
      <?php endforeach; ?>
    </div>
    <div class="chip-cloud roster" style="justify-content:center;">
      <?php foreach ($roster as [$name, $cat, $featured]): ?>
        <span class="chip<?php echo $featured ? ' chip--accent' : ''; ?>" data-cat="<?php echo e($cat); ?>"><?php echo e($name); ?></span>
      <?php endforeach; ?>
    </div>
    <p class="roster-count" data-roster-count aria-live="polite"></p>
    <p class="text-center small">…and many more across concerts, festivals, corporate gatherings and tournaments.</p>
  </div>
</section>

<?php if (!empty($photos)): ?>
<section class="section--tint">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">From the ground</span>
      <h2>Our team on site</h2>
    </div>
    <div class="gallery-grid">
      <?php foreach ($photos as $p): ?>
        <figure><img src="<?php echo e($p['src']); ?>" alt="<?php echo e($p['caption']); ?>" loading="lazy"><figcaption><?php echo e($p['caption']); ?></figcaption></figure>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<?php endif; ?>

<section class="section--navy">
  <div class="container text-center">
    <h2>Your event could be next on this list</h2>
    <p style="max-width:640px;margin-inline:auto;">Tell us the venue, dates and what you need to run — payments, entry, public Wi-Fi, production — and we'll design it around your event.</p>
    <div class="hero__cta" style="justify-content:center;">
      <a href="<?php echo e(CONTACT_WHATSAPP_LINK); ?>" target="_blank" rel="noopener" class="btn btn--whatsapp btn--lg">WhatsApp Us</a>
      <a href="event-planner.php" class="btn btn--primary btn--lg">Plan Your Event Network</a>
    </div>
  </div>
</section>

<?php echo event_assets_js(); ?>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
