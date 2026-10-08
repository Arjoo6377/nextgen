import { PHONE_TEL } from './site-content';

export const EVENT_WHATSAPP = `https://wa.me/${PHONE_TEL.replace(/\D/g, '')}`;

export const EVENT_LINKS = [
  { path: '/events', label: 'Overview', exact: true },
  { path: '/events/hotspots', label: 'Concert hotspots', exact: false },
  { path: '/events/projects', label: 'Events delivered', exact: false },
  { path: '/events/plan', label: 'Plan a network', exact: false }
];

export const EVENT_LAYERS = [
  { title: 'Payment and coupon counters', image: 'images/events/event-payments.jpg', body: 'Dedicated Wi-Fi at coupon, top-up, merch and food counters so UPI and card payments go through, instead of waiting on a crowded mobile network.' },
  { title: 'Public attendee Wi-Fi', image: 'images/events/event-public-wifi.jpg', body: 'Access points planned around footfall, on their own network so guest traffic never competes with payments or production.' },
  { title: 'Entry, box office and accreditation', image: 'images/events/event-entry.jpg', body: 'Always-on connectivity for ticket scanning, turnstiles, box office and help desks, with a second path at the critical points.' },
  { title: 'Production, artist and broadcast', image: 'images/events/event-production.jpg', body: 'High-bandwidth lines for production offices, stage and console, artist rooms, and content teams.' },
  { title: 'Redundancy and power backup', image: 'images/events/event-redundancy.jpg', body: 'Wi-Fi plus a wired line with automatic failover on critical points, and battery backup at every point on the network.' },
  { title: 'Monitoring and reports', image: 'images/events/event-monitoring.jpg', body: 'Live monitoring with alerts on the ring option, plus post-event transaction and connectivity reports for the commercial team.' }
];

export const EVENT_KINDS = [
  { title: 'Concerts and tours', image: 'images/events/event-concerts.jpg', body: 'International and Indian artist tours, from club shows to open-air stadium nights.' },
  { title: 'Festivals and fairs', image: 'images/events/event-festivals.jpg', body: 'Multi-day music festivals, literature and media festivals, bazaars and brand activations.' },
  { title: 'Corporate and community', image: 'images/events/event-corporate.jpg', body: 'Technology company events, business-network gatherings and corporate group programmes.' },
  { title: 'Gaming and esports', image: 'images/events/event-esports.jpg', body: 'Tournament networks with dedicated bandwidth and broadcast uplinks.' }
];

export const EVENT_COMPARE = [
  ['Network ownership', 'Varies — worth asking who owns the network', 'Licensed ISP with our own network, from the point of presence to the venue'],
  ['Design', 'Often a standard kit for the whole venue', 'Point-by-point design across operations, revenue and live zones'],
  ['Payment safety', 'Varies — ask whether payments are separated', 'Payment traffic kept apart at counters and box office'],
  ['Failover', 'Varies by package — ask what happens if a link fails', 'Wi-Fi plus a wired line on critical points; the ring option reroutes on a fiber cut'],
  ['Monitoring', 'Varies — ask who watches the network during the show', '24/7 network operations; live monitoring and alerts on the ring option'],
  ['After the event', 'Usually de-rig and invoice', 'Transaction and connectivity reports']
];

export const EVENT_OPTIONS = [
  { title: 'Point-to-point', image: 'images/events/event-redundancy.jpg', body: 'Best for events of up to roughly 20,000 attendees. Fast to deploy, with battery backup at every point. Redundancy can be added for larger builds.' },
  { title: 'Ring network', image: 'images/events/event-monitoring.jpg', body: 'Built for stadium and big-ground events, VVIP Wi-Fi and high ticket values. The ring reroutes on a fiber cut, and the team can watch the network live.' }
];

export const EVENT_STEPS = [
  { title: 'Brief', image: 'images/events/event-corporate.jpg', body: 'You share the venue, dates, expected footfall and what needs connectivity. A call or WhatsApp is enough to start.' },
  { title: 'Site survey', image: 'images/events/event-entry.jpg', body: 'We walk the venue, check fiber and power, and map where each zone and counter will sit.' },
  { title: 'Design and quote', image: 'images/events/event-monitoring.jpg', body: 'A point-by-point design across operations, revenue and live zones, with an itemised quote against your point list.' },
  { title: 'Deploy and test', image: 'images/events/event-redundancy.jpg', body: 'The team installs links, switches, access points and battery backup, then tests every point before gates open.' },
  { title: 'Live support', image: 'images/events/event-concerts.jpg', body: 'On-site response and 24/7 monitoring through the event, with live visibility on the ring option.' },
  { title: 'De-rig and report', image: 'images/events/event-production.jpg', body: 'Full de-rig within the agreed window, followed by a transaction and connectivity report.' }
];

export const EVENT_BRIEF = [
  ['Venue and dates', 'Location, set-up days, event days and the de-rig window.'],
  ['Expected footfall', 'Total attendance and the peak number of people on site at once.'],
  ['Zone list', 'Box office, turnstiles, counters, production, artist areas and activations.'],
  ['Payments', 'How many coupon, top-up, merch and food counters need to take payment.'],
  ['Live content', 'Streaming, broadcast or social-media teams on site.'],
  ['Existing connectivity', 'Anything already at the venue we should work with.']
];

export const EVENT_SIZING = [
  ['UPI and card payments', 'Small data, and no tolerance for drops', 'Dedicated counter hotspots on a separate payment network, with failover'],
  ['Entry and accreditation', 'Always on, with many quick transactions', 'Two links at turnstiles and box office'],
  ['Public attendee Wi-Fi', 'Many people online at once', 'Access points planned by footfall, fenced off from payments'],
  ['Live streaming and content', 'High, steady upload', 'Dedicated high-bandwidth lines in the live zone'],
  ['Production, artist and crew', 'Reliable, private connectivity', 'Separate networks from guest traffic'],
  ['Sponsor activations', 'Bursty, booth-by-booth needs', 'A connection added to the point list for each booth']
];

export const EVENT_FAQS = [
  { q: 'How is event pricing worked out?', a: 'Pricing is itemised per point after a site survey, against your point list. We do not quote a flat package before seeing the venue. Commercial terms are set out in the proposal or work order.' },
  { q: 'Do you cover outdoor festival grounds as well as indoor venues?', a: 'Yes. Event work spans open-air grounds, stadium-scale venues and indoor halls. The survey confirms fiber, power and layout for that site.' },
  { q: 'What happens if the main internet link fails during the show?', a: 'Critical points run Wi-Fi plus a wired line with automatic failover, and a backup link takes over if the primary drops. On the ring option, traffic reroutes around a fiber cut.' },
  { q: 'Can payments be kept separate from public Wi-Fi?', a: 'Yes. Payment, guest and production traffic sit on separate networks, including at top-up counters and the box office.' },
  { q: 'Will we get any reporting after the event?', a: 'Yes. Post-event transaction and connectivity reports show the impact on counter performance.' },
  { q: 'Where do you work?', a: 'Nextgen is based in Gurugram and deploys across NCR, Haryana and the rest of India. Send the venue and we will confirm whether we can cover it.' }
];

export const EVENT_STATS = [
  { value: '10+ yrs', label: 'Event-grade deployment experience' },
  { value: '250+', label: 'Shows and events powered' },
  { value: '1,00,000+', label: 'Concurrent users handled at one venue' },
  { value: '3 Gbps', label: 'Dedicated bandwidth at a major esports event' }
];

export const EVENT_TIMELINE = [
  { year: '2016', tag: 'Gaming and esports', title: 'Nodwin Gaming partnership begins', image: 'images/events/event-esports.jpg', body: 'Tournament networks with dedicated bandwidth, in Delhi and Mumbai — still running today.' },
  { year: '2023', tag: 'Hotspots', title: 'BookMyShow festivals and Sahitya Aaj Tak', image: 'images/events/event-payments.jpg', body: 'Wi-Fi hotspots for UPI and coupon-counter transactions, with reported increases in counter sales.' },
  { year: '2024', tag: 'Repeat deployment', title: 'Back for the next edition', image: 'images/events/event-festivals.jpg', body: 'The same hotspot approach repeated, with post-event reports delivered to the commercial team.' },
  { year: '2025', tag: 'Full on-ground network', title: 'BookMyShow Live Events', image: 'images/events/event-entry.jpg', body: 'Box office, entry and turnstiles, revenue counters, and production and artist zones on one design.' }
];

export const EVENT_CASES = [
  { year: '2025', title: 'BookMyShow Live Events', image: 'images/events/event-concerts.jpg', points: ['Full on-ground network across operations, revenue and live zones', 'Box office, entry and revenue counters on one design', 'Production and artist zones on separate, high-bandwidth lines'] },
  { year: '2023–24', title: 'BookMyShow festivals and Sahitya Aaj Tak', image: 'images/events/event-festivals.jpg', points: ['Wi-Fi hotspots at coupon and top-up counters for UPI payments', 'Reported increases in coupon-counter sales', 'Post-event transaction and connectivity reports'] },
  { year: '2016–now', title: 'Nodwin Gaming', image: 'images/events/event-esports.jpg', points: ['3 Gbps of dedicated bandwidth for a major tournament', 'Two links with fast failover', 'Ongoing partner across Delhi and Mumbai'] }
];

export type EventCategory = 'festival' | 'intl' | 'indian' | 'corporate' | 'platform' | 'gaming';

export const EVENT_CATEGORIES: { id: 'all' | EventCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'festival', label: 'Festivals and media' },
  { id: 'intl', label: 'International tours' },
  { id: 'indian', label: 'Indian artists' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'platform', label: 'Ticketing platforms' },
  { id: 'gaming', label: 'Gaming and esports' }
];

export const EVENT_ROSTER: { name: string; cat: EventCategory; featured: boolean }[] = [
  { name: 'Lollapalooza India', cat: 'festival', featured: true },
  { name: 'Sunburn Festival', cat: 'festival', featured: true },
  { name: 'Sahitya Aaj Tak (India Today Group)', cat: 'festival', featured: true },
  { name: 'BOHO Bazaar', cat: 'festival', featured: false },
  { name: 'Ed Sheeran', cat: 'intl', featured: true },
  { name: 'DJ Snake', cat: 'intl', featured: false },
  { name: 'Martin Garrix (India Tour)', cat: 'intl', featured: false },
  { name: 'Illenium & Blanke (India Tour)', cat: 'intl', featured: false },
  { name: 'Cigarettes After Sex (India Tour)', cat: 'intl', featured: false },
  { name: 'Hardwell', cat: 'intl', featured: false },
  { name: 'Alan Walker', cat: 'intl', featured: false },
  { name: 'Armin van Buuren', cat: 'intl', featured: false },
  { name: 'G-Eazy', cat: 'intl', featured: false },
  { name: 'Boris Brejcha', cat: 'intl', featured: false },
  { name: 'Def Leppard', cat: 'intl', featured: false },
  { name: 'Scorpions', cat: 'intl', featured: false },
  { name: 'Karan Aujhla — It Was All A Dream Tour', cat: 'indian', featured: false },
  { name: 'Honey Singh — Millionaire Tour', cat: 'indian', featured: false },
  { name: 'King (Rapper)', cat: 'indian', featured: false },
  { name: 'AP Dhillon', cat: 'indian', featured: false },
  { name: 'Anuv Jain', cat: 'indian', featured: false },
  { name: 'Radhika Das', cat: 'indian', featured: false },
  { name: 'Rishabh Sharma — Sitar for Mental Peace', cat: 'indian', featured: false },
  { name: 'Microsoft India Events', cat: 'corporate', featured: true },
  { name: 'Google Events', cat: 'corporate', featured: true },
  { name: 'Hero Group', cat: 'corporate', featured: false },
  { name: 'BNI India', cat: 'corporate', featured: false },
  { name: 'BookMyShow Live Events', cat: 'platform', featured: true },
  { name: 'District', cat: 'platform', featured: false },
  { name: 'Nodwin Gaming — gaming and esports (2016–ongoing)', cat: 'gaming', featured: true }
];

export const EVENT_WALK = [
  { title: 'The Nextgen point of presence', body: 'The event is fed from the carrier network, watched around the clock from the point of presence to the venue.' },
  { title: 'Two links in, never one', body: 'A primary fiber link and a backup link arrive at the venue. If the primary drops, traffic moves to the backup automatically.' },
  { title: 'The event core', body: 'Router, firewall and managed switches sit in a battery-backed server room, so faults can raise an alert before anyone notices.' },
  { title: 'The backbone', body: 'Fiber runs across the ground — as a ring that reroutes on a cut, or point-to-point for smaller builds.' },
  { title: 'Three zone networks, kept apart', body: 'Operations, revenue and live zones each get their own design, so a crowd on public Wi-Fi cannot slow the gate or the stage.' },
  { title: 'The counter hotspot', body: 'At every coupon, top-up, merch and food counter, a dedicated hotspot connects the payment device. The sale is confirmed and logged for the post-event report.' }
];

export const EVENT_PRINCIPLES = [
  { title: 'Wi-Fi plus a wired line', image: 'images/events/event-public-wifi.jpg', body: 'Critical counters get both a wired connection and Wi-Fi, with automatic failover between them.' },
  { title: 'Payments kept separate', image: 'images/events/event-payments.jpg', body: 'Payment, guest and production traffic run on separate networks at every payment point.' },
  { title: 'Battery backup at every point', image: 'images/events/event-redundancy.jpg', body: 'A power blip at one counter should not take it off the network.' },
  { title: 'Reports you can use', image: 'images/events/event-monitoring.jpg', body: 'Post-event transaction and connectivity data for the next event’s planning.' }
];
