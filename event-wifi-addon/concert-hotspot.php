<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/event-helpers.php';

$pageTitle       = 'How Wi-Fi Hotspots Work at Concerts — UPI & Coupon Counter Connectivity | NextGen Broadband';
$pageDescription = 'A visual walk-through of how NextGen builds concert Wi-Fi: dual uplinks, event core, zone networks and dedicated hotspots at coupon and top-up counters so UPI payments never stall.';

require_once __DIR__ . '/includes/header.php';
echo event_assets_css();
?>

<section class="page-hero">
  <div class="container page-hero__inner">
    <p class="breadcrumb"><a href="index.php">Home</a> / <a href="events-wifi.php">Event &amp; Concert Wi-Fi</a> / Concert Hotspots</p>
    <span class="eyebrow" style="background:rgba(255,255,255,.08);color:var(--orange-400);">Concert Hotspots Explained</span>
    <h1>How a Concert Wi-Fi Hotspot Network Is Built — Step by Step</h1>
    <p>Why UPI payments work at the coupon counter even when 20,000 phones are fighting for signal — and exactly what sits between your counter and the internet.</p>
  </div>
  <?php echo wave_divider(); ?>
</section>

<?php echo event_subnav('concert-hotspot.php'); ?>

<section>
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">The problem</span>
      <h2>Mobile networks and crowds don't mix</h2>
      <p>Put thousands of phones in one field and every mobile tower in range is overloaded. The people most affected are the ones trying to pay.</p>
    </div>
    <div class="versus">
      <div class="versus__col versus__col--bad">
        <h3>Counter relying on mobile data</h3>
        <ul>
          <li><b>✕</b>UPI requests time out when the crowd peaks</li>
          <li><b>✕</b>Staff retry payments, queues grow, attendees walk away</li>
          <li><b>✕</b>No visibility into what failed, or why</li>
          <li><b>✕</b>Lost sales that never show up in any report</li>
        </ul>
      </div>
      <div class="versus__col versus__col--good">
        <h3>Counter on a NextGen hotspot</h3>
        <ul>
          <li><b>✔</b>Dedicated Wi-Fi hotspot at each counter, off the public mobile network</li>
          <li><b>✔</b>Payment traffic on its own segmented VLAN</li>
          <li><b>✔</b>Dual-redundant uplinks with automatic failover</li>
          <li><b>✔</b>Post-event reports that show transactions and connectivity</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section--tint">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">The diagram</span>
      <h2>From our network to the coupon counter</h2>
      <p>Follow the numbered markers: the diagram and the walk-through use the same numbers.</p>
    </div>

    <div class="diagram-layout">
      <div>
        <div class="flow-diagram">
          <svg viewBox="0 0 600 880" role="img" aria-labelledby="hsT hsD" xmlns="http://www.w3.org/2000/svg">
            <title id="hsT">How a concert Wi-Fi hotspot network is built</title>
            <desc id="hsD">Top to bottom: the NextGen POP feeds a primary fiber link and a backup link into an event core. A fiber backbone then serves three zone networks — Operations, Revenue and Live or Working. The Revenue zone feeds dedicated counter hotspots, which connect point-of-sale and UPI devices to confirm payments.</desc>
            <defs>
              <marker id="dArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#17813f"/>
              </marker>
            </defs>

            <!-- Connecting lines (drawn first, nodes sit on top) -->
            <line class="d-line" x1="250" y1="86" x2="150" y2="150"/>
            <line class="d-line d-line--backup" x1="350" y1="86" x2="450" y2="150"/>
            <line class="d-line" x1="150" y1="196" x2="200" y2="250"/>
            <line class="d-line d-line--backup" x1="450" y1="196" x2="400" y2="250"/>
            <line class="d-line" x1="300" y1="334" x2="300" y2="380"/>
            <line class="d-line" x1="104" y1="420" x2="104" y2="470"/>
            <line class="d-line" x1="300" y1="420" x2="300" y2="470"/>
            <line class="d-line" x1="496" y1="420" x2="496" y2="470"/>
            <line class="d-line" x1="300" y1="646" x2="300" y2="690"/>

            <!-- 1. POP -->
            <rect class="d-box d-box--navy" x="170" y="16" width="260" height="70" rx="14"/>
            <text class="d-t d-t--w d-t--lg" x="300" y="46" text-anchor="middle">NextGen POP</text>
            <text class="d-s d-s--w" x="300" y="68" text-anchor="middle">Carrier-grade ISP · 24×7 NOC</text>

            <!-- 2. Dual uplinks -->
            <rect class="d-box" x="60" y="150" width="180" height="46" rx="12"/>
            <text class="d-t" x="150" y="170" text-anchor="middle">Primary fiber link</text>
            <text class="d-s" x="150" y="186" text-anchor="middle">Ring-fenced bandwidth</text>
            <rect class="d-box" x="360" y="150" width="180" height="46" rx="12" stroke-dasharray="5 4"/>
            <text class="d-t" x="450" y="170" text-anchor="middle">Backup link</text>
            <text class="d-s" x="450" y="186" text-anchor="middle">Automatic failover</text>

            <!-- 3. Event core -->
            <rect class="d-box d-box--green" x="80" y="250" width="440" height="84" rx="14"/>
            <text class="d-t d-t--w d-t--lg" x="300" y="278" text-anchor="middle">Event core / server room</text>
            <text class="d-s d-s--w" x="300" y="299" text-anchor="middle">Router · Firewall · Managed switches · NMS</text>
            <text class="d-s d-s--w" x="300" y="319" text-anchor="middle">UPS-backed · dual-redundant</text>

            <!-- 4. Backbone -->
            <rect class="d-box d-box--soft" x="40" y="380" width="520" height="40" rx="20"/>
            <text class="d-t" x="300" y="405" text-anchor="middle">Fiber ring / point-to-point backbone</text>

            <!-- 5. Zones -->
            <rect class="d-zone d-zone--ops" x="12" y="470" width="184" height="176" rx="14"/>
            <path class="d-head--ops" d="M12,504 V484 a14,14 0 0 1 14,-14 H182 a14,14 0 0 1 14,14 V504 Z"/>
            <text class="d-t d-t--w" x="104" y="492" text-anchor="middle">Operations</text>
            <text class="d-s d-s--i" x="104" y="522" text-anchor="middle">Zero-tolerance, dual-redundant</text>
            <text class="d-li" x="26" y="548">• Box office / accreditation</text>
            <text class="d-li" x="26" y="568">• Turnstiles</text>
            <text class="d-li" x="26" y="588">• Medical</text>
            <text class="d-li" x="26" y="608">• Server room</text>
            <text class="d-li" x="26" y="628">• Help desk</text>

            <rect class="d-zone d-zone--rev" x="208" y="470" width="184" height="176" rx="14"/>
            <path class="d-head--rev" d="M208,504 V484 a14,14 0 0 1 14,-14 H378 a14,14 0 0 1 14,14 V504 Z"/>
            <text class="d-t d-t--w" x="270" y="492" text-anchor="middle">Revenue</text>
            <rect class="d-pill" x="330" y="477" width="54" height="18" rx="9" fill="#fff" opacity=".95"/>
            <text class="d-pill-t" x="357" y="490" text-anchor="middle">Wi-Fi</text>
            <text class="d-s d-s--i" x="300" y="522" text-anchor="middle">PCI-DSS segmented</text>
            <text class="d-li" x="222" y="548">• Coupon / top-up counters</text>
            <text class="d-li" x="222" y="568">• Merch &amp; public Wi-Fi</text>
            <text class="d-li" x="222" y="588">• Food, bar &amp; hydration</text>
            <text class="d-li" x="222" y="608">• Brand activations</text>
            <text class="d-li" x="222" y="628">• ATM</text>

            <rect class="d-zone d-zone--live" x="404" y="470" width="184" height="176" rx="14"/>
            <path class="d-head--live" d="M404,504 V484 a14,14 0 0 1 14,-14 H574 a14,14 0 0 1 14,14 V504 Z"/>
            <text class="d-t d-t--w" x="496" y="492" text-anchor="middle">Live / Working</text>
            <text class="d-s d-s--i" x="496" y="522" text-anchor="middle">Highest bandwidth</text>
            <text class="d-li" x="418" y="548">• Production office</text>
            <text class="d-li" x="418" y="568">• Stage L/R &amp; console</text>
            <text class="d-li" x="418" y="588">• Artist rooms &amp; lounge</text>
            <text class="d-li" x="418" y="608">• Crew dining</text>
            <text class="d-li" x="418" y="628">• Content &amp; social media</text>

            <!-- 6. Counter hotspot detail -->
            <rect class="d-panel" x="12" y="690" width="576" height="170" rx="16"/>
            <text class="d-t d-t--lg" x="48" y="722">Inside a coupon / top-up counter</text>

            <rect class="d-box" x="24" y="752" width="160" height="70" rx="12"/>
            <text class="d-t" x="104" y="778" text-anchor="middle">Counter hotspot</text>
            <text class="d-s" x="104" y="797" text-anchor="middle">Dedicated AP · UPS-backed</text>

            <rect class="d-box" x="220" y="752" width="160" height="70" rx="12"/>
            <text class="d-t" x="300" y="778" text-anchor="middle">POS / UPI device</text>
            <text class="d-s" x="300" y="797" text-anchor="middle">On the payment VLAN</text>

            <rect class="d-box d-box--green" x="416" y="752" width="160" height="70" rx="12"/>
            <text class="d-t d-t--w" x="496" y="778" text-anchor="middle">UPI confirmed</text>
            <text class="d-s d-s--w" x="496" y="797" text-anchor="middle">Sale logged for reports</text>

            <line class="d-line d-line--solid" x1="184" y1="787" x2="218" y2="787" marker-end="url(#dArrow)"/>
            <line class="d-line d-line--solid" x1="380" y1="787" x2="414" y2="787" marker-end="url(#dArrow)"/>

            <text class="d-s d-s--i" x="300" y="846" text-anchor="middle">Guest Wi-Fi sits on its own VLAN, so crowd traffic never competes with payments.</text>

            <!-- Number badges -->
            <g>
              <circle class="d-badge" cx="170" cy="16" r="12"/><text class="d-badge-t" x="170" y="20.5" text-anchor="middle">1</text>
              <circle class="d-badge" cx="60" cy="150" r="12"/><text class="d-badge-t" x="60" y="154.5" text-anchor="middle">2</text>
              <circle class="d-badge" cx="80" cy="250" r="12"/><text class="d-badge-t" x="80" y="254.5" text-anchor="middle">3</text>
              <circle class="d-badge" cx="40" cy="380" r="12"/><text class="d-badge-t" x="40" y="384.5" text-anchor="middle">4</text>
              <circle class="d-badge" cx="208" cy="470" r="12"/><text class="d-badge-t" x="208" y="474.5" text-anchor="middle">5</text>
              <circle class="d-badge" cx="12" cy="690" r="12"/><text class="d-badge-t" x="12" y="694.5" text-anchor="middle">6</text>
            </g>
          </svg>
        </div>
        <div class="diagram-legend">
          <span><i></i> Live primary path</span>
          <span><i class="is-backup"></i> Backup path (automatic failover)</span>
        </div>
      </div>

      <div>
        <ol class="walk">
          <li>
            <h3>The NextGen POP — where your event meets the internet</h3>
            <p>Your event is fed from our carrier-grade network, watched around the clock by our 24×7 NOC — supervision from POP to premises.</p>
          </li>
          <li>
            <h3>Two links in, never one</h3>
            <p>A primary fiber link and a backup link arrive at the venue. If the primary drops, traffic moves to the backup automatically.</p>
          </li>
          <li>
            <h3>The event core</h3>
            <p>Router, firewall and managed switches sit in a UPS-backed server room, usually with NMS monitoring so faults raise an alert before anyone notices.</p>
          </li>
          <li>
            <h3>The backbone</h3>
            <p>Fiber runs out across the ground — as a ring that reroutes instantly on a cut (Option 2), or point-to-point for smaller builds (Option 1).</p>
          </li>
          <li>
            <h3>Three zone networks, kept apart</h3>
            <p>Operations (entry and box office), Revenue (counters and payments) and Live / Working (production and artists) each get their own design, so a crowd on public Wi-Fi can't slow the gate or the stage.</p>
          </li>
          <li>
            <h3>The counter hotspot</h3>
            <p>At every coupon, top-up, merch and F&amp;B counter, a dedicated hotspot connects the POS or UPI device to the payment VLAN. The sale is confirmed, and logged for your post-event report.</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="grid grid--2" style="align-items:center;">
      <figure class="media-card" style="margin:0;">
        <img src="assets/img/event-crowd-illustration.jpg" alt="Illustration of a festival ground at night with tents, towers and a crowd" loading="lazy">
        <figcaption>Illustration — a festival ground at night.</figcaption>
      </figure>
      <div>
        <span class="eyebrow">Proven at the counter</span>
        <h2>Hotspots that moved real sales</h2>
        <p>NextGen delivered Wi-Fi hotspot connectivity for UPI and coupon-counter transactions at BookMyShow festivals and at India Today's Sahitya Aaj Tak, in 2023 and 2024 — with measurable, reported increases in coupon-counter sales.</p>
        <p>After each event we supplied transaction and connectivity reports directly to the commercial team, so the impact on revenue was visible, not assumed.</p>
        <ul class="checklist" style="margin-top:1rem;">
          <li>UPI payments work first time, even at peak crowd</li>
          <li>Reports link connectivity to counter performance</li>
          <li>The same design scales from one counter to a full ground</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section--tint dot-grid">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">Design principles</span>
      <h2>What we build into every hotspot network</h2>
    </div>
    <div class="grid grid--4">
      <div class="card"><div class="card__icon"><?php echo svg_icon('wifi'); ?></div><h3>Dual Wi-Fi + hardline</h3><p>Critical counters get both a wired connection and Wi-Fi, with automatic failover between them.</p></div>
      <div class="card"><div class="card__icon"><?php echo svg_icon('lock'); ?></div><h3>PCI-DSS segmentation</h3><p>Payment, guest and production traffic run on separate VLANs at every payment-adjacent point.</p></div>
      <div class="card"><div class="card__icon"><?php echo svg_icon('plug'); ?></div><h3>UPS at every point</h3><p>A power blip at one counter shouldn't take it off the network.</p></div>
      <div class="card"><div class="card__icon"><?php echo svg_icon('barchart'); ?></div><h3>Reports you can use</h3><p>Post-event transaction and connectivity data for the next event's planning and ROI.</p></div>
    </div>
    <p class="text-center" style="margin-top:1.6rem;"><a href="event-planner.php" class="btn btn--primary">Plan your event network</a></p>
  </div>
</section>

<?php echo event_assets_js(); ?>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
