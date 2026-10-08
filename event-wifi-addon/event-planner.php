<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/includes/event-helpers.php';

$pageTitle       = 'Plan Your Event Network — Process, Sizing & FAQs | NextGen Broadband';
$pageDescription = 'How NextGen plans event Wi-Fi and internet: site survey, zone design, deployment, live support and reports. What to send us, how we size bandwidth, and answers to common questions.';

require_once __DIR__ . '/includes/header.php';
echo event_assets_css();
?>

<section class="page-hero">
  <div class="container page-hero__inner">
    <p class="breadcrumb"><a href="index.php">Home</a> / <a href="events-wifi.php">Event &amp; Concert Wi-Fi</a> / Plan Your Event Network</p>
    <span class="eyebrow" style="background:rgba(255,255,255,.08);color:var(--orange-400);">Plan Your Event Network</span>
    <h1>From First Call to De-Rig: How We Plan an Event Network</h1>
    <p>Here's exactly what happens after you contact us, what we need from you, and how we decide how much network your event needs.</p>
    <div class="hero__cta" style="margin-top:1.4rem;">
      <a href="<?php echo e(CONTACT_WHATSAPP_LINK); ?>" target="_blank" rel="noopener" class="btn btn--whatsapp btn--lg">WhatsApp Your Requirement</a>
      <a href="contact.php?interest=Event+Connectivity" class="btn btn--light btn--lg">Request a Site Survey</a>
    </div>
  </div>
  <?php echo wave_divider(); ?>
</section>

<?php echo event_subnav('event-planner.php'); ?>

<section>
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">Our process</span>
      <h2>Six steps, one accountable team</h2>
    </div>
    <div class="tl" style="--tl-cols:3;">
      <div class="tl__item">
        <div class="tl__dot">1</div>
        <h3>Brief</h3>
        <p>You share venue, dates, expected footfall and what needs connectivity. A call or WhatsApp is enough to start.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">2</div>
        <h3>Site survey</h3>
        <p>We walk the venue, check fiber and power options, and map where each zone and counter will sit.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">3</div>
        <h3>Design &amp; quote</h3>
        <p>A point-wise design across operations, revenue and live zones, with an itemised quote against your point list.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">4</div>
        <h3>Deploy &amp; test</h3>
        <p>Our team installs links, switches, access points and UPS, then tests every point before gates open.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">5</div>
        <h3>Live support</h3>
        <p>On-site response and 24×7 NOC monitoring through the event, with live NMS visibility on the ring option.</p>
      </div>
      <div class="tl__item">
        <div class="tl__dot">6</div>
        <h3>De-rig &amp; report</h3>
        <p>Full de-rig within the agreed window, followed by a transaction and connectivity report for your team.</p>
      </div>
    </div>
  </div>
</section>

<section class="section--tint">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;">
      <div>
        <span class="eyebrow">What to send us</span>
        <h2>The details that let us quote accurately</h2>
        <p>You don't need all of this on the first message — but the more we know, the faster the design and quote.</p>
        <ul class="checklist">
          <li><span><strong>Venue &amp; dates</strong> — location, set-up days, event days, de-rig window</span></li>
          <li><span><strong>Expected footfall</strong> — total and peak concurrent attendees</span></li>
          <li><span><strong>Zone / point list</strong> — box office, turnstiles, counters, production, artist areas, activations</span></li>
          <li><span><strong>Payments</strong> — number of coupon, top-up, merch and F&amp;B counters</span></li>
          <li><span><strong>Live content</strong> — streaming, broadcast or social-media teams on site</span></li>
          <li><span><strong>Existing connectivity</strong> — anything already at the venue we should work with</span></li>
        </ul>
      </div>
      <div class="card card--navy">
        <h3>Not sure what you need?</h3>
        <p>Send the venue and a rough footfall — we'll suggest a zone list and the right deployment option, and a survey will confirm the rest. Final pricing is itemised per point after the site survey, never a flat number sight-unseen.</p>
        <a href="<?php echo e(CONTACT_WHATSAPP_LINK); ?>" target="_blank" rel="noopener" class="btn btn--whatsapp">WhatsApp <?php echo e(CONTACT_PHONE_DISPLAY); ?></a>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">How we size your network</span>
      <h2>Different activities need different networks</h2>
      <p>We size each part of the event for what it actually does — not one blanket number for the whole ground.</p>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Activity at your event</th><th>What it demands</th><th>How we design for it</th></tr></thead>
        <tbody>
          <tr><td><strong>UPI &amp; card payments</strong></td><td>Small data, zero tolerance for drops</td><td>Dedicated counter hotspots on a segmented payment VLAN, with failover</td></tr>
          <tr><td><strong>Entry &amp; accreditation</strong></td><td>Always-on, many quick transactions</td><td>Dual-redundant links at turnstiles and box office</td></tr>
          <tr><td><strong>Public attendee Wi-Fi</strong></td><td>Many simultaneous users</td><td>Access-point density planned by footfall; bandwidth fenced off from payments</td></tr>
          <tr><td><strong>Live streaming &amp; content</strong></td><td>High, steady upload bandwidth</td><td>Dedicated high-bandwidth lines in the live / working zone</td></tr>
          <tr><td><strong>Production, artist &amp; crew</strong></td><td>Reliable, private connectivity</td><td>Separate VLANs and lines from guest traffic</td></tr>
          <tr><td><strong>Sponsor activations</strong></td><td>Bursty, booth-by-booth needs</td><td>Per-point connections added to the point list</td></tr>
        </tbody>
      </table>
    </div>
    <div class="grid grid--2" style="margin-top:1.6rem;">
      <div class="card">
        <span class="tl__tag">Option 1</span>
        <h3>Point-to-point OLT</h3>
        <p class="mb-0">Events up to roughly 20,000 attendees. Redundancy can be added for larger builds; UPS at every point.</p>
      </div>
      <div class="card">
        <span class="tl__tag">Option 2</span>
        <h3>Ring network + live NMS</h3>
        <p class="mb-0">Stadium and big-ground events, VVIP Wi-Fi and high ticket values. Built-in redundancy, SNMP monitoring and a central NMS portal.</p>
      </div>
    </div>
  </div>
</section>

<section class="section--tint">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow">FAQ</span>
      <h2>Questions event organisers ask us</h2>
    </div>
    <div class="faq">
      <details>
        <summary>How is event pricing worked out?</summary>
        <p>Pricing is itemised per point after a site survey, against your point list. We don't quote a flat package sight-unseen. Commercial terms for each event are set out in the proposal or work order we agree with you.</p>
      </details>
      <details>
        <summary>Do you cover outdoor festival grounds as well as indoor venues?</summary>
        <p>Yes. Our event work spans open-air festival grounds, stadium-scale venues and indoor halls. The survey confirms fiber access, power and layout for your specific site.</p>
      </details>
      <details>
        <summary>What happens if the main internet link fails during the show?</summary>
        <p>Critical points run dual Wi-Fi plus hardline with automatic failover, and a backup link takes over if the primary drops. On the ring option, traffic reroutes instantly around a fiber cut.</p>
      </details>
      <details>
        <summary>Can payments be kept separate from public Wi-Fi?</summary>
        <p>Yes — that's standard in our design. Payment, guest and production traffic sit on separate VLANs, with PCI-DSS-style segmentation at payment-adjacent points like top-up counters and box office.</p>
      </details>
      <details>
        <summary>Will we get any reporting after the event?</summary>
        <p>Yes. We supply post-event transaction and connectivity reports so your team can see the impact on counter performance and revenue.</p>
      </details>
      <details>
        <summary>Where do you work?</summary>
        <p>We're based in Gurugram and deploy across NCR, Haryana and the rest of India. Send us the venue and we'll confirm feasibility.</p>
      </details>
    </div>
  </div>
</section>

<section class="section--navy">
  <div class="container text-center">
    <h2>Let's design your event network</h2>
    <p style="max-width:640px;margin-inline:auto;">Share your venue, dates and footfall. We'll come back with a point-wise design and an itemised quote.</p>
    <div class="hero__cta" style="justify-content:center;">
      <a href="<?php echo e(CONTACT_WHATSAPP_LINK); ?>" target="_blank" rel="noopener" class="btn btn--whatsapp btn--lg">WhatsApp <?php echo e(CONTACT_PHONE_DISPLAY); ?></a>
      <a href="contact.php?interest=Event+Connectivity" class="btn btn--primary btn--lg">Request a Site Survey</a>
    </div>
  </div>
</section>

<?php echo event_assets_js(); ?>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
