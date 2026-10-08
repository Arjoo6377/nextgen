<?php
/**
 * event-helpers.php
 * Small helpers shared by the four Event Wi-Fi pages
 * (events-wifi.php, concert-hotspot.php, event-projects.php, event-planner.php).
 * Kept in its own file so the pages work as a drop-in addition to the site.
 */
if (!defined('SITE_NAME')) {
    http_response_code(403);
    exit('Direct access forbidden.');
}

/** Pill navigation shared by the four Event Wi-Fi pages. */
function event_subnav(string $active): string
{
    $items = [
        'events-wifi.php'     => 'Event Wi-Fi Overview',
        'concert-hotspot.php' => 'Concert Hotspots Explained',
        'event-projects.php'  => 'Events & Projects Delivered',
        'event-planner.php'   => 'Plan Your Event Network',
    ];
    $html = '<nav class="subnav" aria-label="Event Wi-Fi sections"><div class="container subnav__inner">';
    foreach ($items as $file => $label) {
        $isActive = ($file === $active);
        $html .= '<a class="subnav__link' . ($isActive ? ' is-active' : '') . '" href="' . e($file) . '"'
              . ($isActive ? ' aria-current="page"' : '') . '>' . e($label) . '</a>';
    }
    return $html . '</div></nav>';
}

/** Stylesheet + script tags for the Event Wi-Fi pages (valid in <body>). */
function event_assets_css(): string
{
    return '<link rel="stylesheet" href="assets/css/events-wifi.css">';
}

function event_assets_js(): string
{
    return '<script src="assets/js/events-wifi.js"></script>';
}

/**
 * Photos the owner drops into assets/img/events/ are shown automatically.
 * Returns [['src' => ..., 'caption' => ...], ...]; empty if none uploaded.
 */
function event_gallery_photos(): array
{
    $dir = __DIR__ . '/../assets/img/events';
    $out = [];
    foreach (glob($dir . '/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', GLOB_BRACE) ?: [] as $file) {
        $name = pathinfo($file, PATHINFO_FILENAME);
        $out[] = [
            'src'     => 'assets/img/events/' . rawurlencode(basename($file)),
            'caption' => trim(preg_replace('/[-_]+/', ' ', $name)),
        ];
    }
    sort($out);
    return $out;
}

/**
 * Every named event / tour / client NextGen has supported, as listed in the
 * company profile. 'cat' drives the filter buttons on event-projects.php.
 */
function event_roster(): array
{
    return [
        // Festivals, media & marketplaces
        ['Lollapalooza India', 'festival', true],
        ['Sunburn Festival', 'festival', true],
        ['Sahitya Aaj Tak (India Today Group)', 'festival', true],
        ['BOHO Bazaar', 'festival', false],
        // International artists & tours
        ['Ed Sheeran', 'intl', true],
        ['DJ Snake', 'intl', false],
        ['Martin Garrix (India Tour)', 'intl', false],
        ['Illenium & Blanke (India Tour)', 'intl', false],
        ['Cigarettes After Sex (India Tour)', 'intl', false],
        ['Hardwell', 'intl', false],
        ['Alan Walker', 'intl', false],
        ['Armin van Buuren', 'intl', false],
        ['G-Eazy', 'intl', false],
        ['Boris Brejcha', 'intl', false],
        ['Def Leppard', 'intl', false],
        ['Scorpions', 'intl', false],
        // Indian artists & tours
        ['Karan Aujhla — It Was All A Dream Tour', 'indian', false],
        ['Honey Singh — Millionaire Tour', 'indian', false],
        ['King (Rapper)', 'indian', false],
        ['AP Dhillon', 'indian', false],
        ['Anuv Jain', 'indian', false],
        ['Radhika Das', 'indian', false],
        ['Rishabh Sharma — Sitar for Mental Peace', 'indian', false],
        // Corporate & community
        ['Microsoft India Events', 'corporate', true],
        ['Google Events', 'corporate', true],
        ['Hero Group', 'corporate', false],
        ['BNI India', 'corporate', false],
        // Ticketing platforms & gaming
        ['BookMyShow Live Events', 'platform', true],
        ['District', 'platform', false],
        ['Nodwin Gaming — gaming & esports (2016–ongoing)', 'gaming', true],
    ];
}

function event_categories(): array
{
    return [
        'all'       => 'All',
        'festival'  => 'Festivals & media',
        'intl'      => 'International tours',
        'indian'    => 'Indian artists',
        'corporate' => 'Corporate',
        'platform'  => 'Ticketing platforms',
        'gaming'    => 'Gaming & esports',
    ];
}
