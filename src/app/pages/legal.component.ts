import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ABUSE_EMAILS, GRIEVANCE_EMAIL, GRIEVANCE_NAME, OFFICE_LINES, OFFICE_NAME } from '../site-content';

interface LegalPage {
  title: string;
  updated?: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const PAGES: Record<string, LegalPage> = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'What this covers',
        paragraphs: [
          'This policy explains how Nextgen Broadband uses information when you visit the website. It is here so you can see what is collected before you browse, enquire or pay a bill.'
        ]
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'To make the site more useful, we may use cookies or similar tools. A cookie can assign a random user ID so the site can understand interests on that browser.',
          'Unless you identify yourself, for example by sending an enquiry, that ID does not tell us who you are. A cookie only holds personal information you choose to provide. It cannot read other files on your computer.',
          'Advertisers may set their own cookies if you open their ads. Nextgen does not control those cookies.'
        ]
      },
      {
        heading: 'Connection information',
        paragraphs: [
          'Our web servers automatically collect limited information about your computer’s connection, including your IP address, when you visit. An IP address lets the internet deliver the page you asked for. It does not identify you personally.',
          'We use this to deliver pages, understand how the site is used, and see the general locations visitors come from.'
        ]
      },
      {
        heading: 'Complaints',
        paragraphs: [
          `Complaints about content, comments or a breach of these terms can be sent in writing to the grievance officer, ${GRIEVANCE_NAME}, at ${GRIEVANCE_EMAIL}. Abuse reports can be sent to ${ABUSE_EMAILS.join(' or ')}.`,
          `${OFFICE_NAME}, ${OFFICE_LINES.join(', ')}.`
        ]
      }
    ]
  },
  cookie: {
    title: 'Cookie Policy',
    sections: [
      {
        heading: 'How cookies are used',
        paragraphs: [
          'Cookies, or similar tools, help the site respond to visitors. They may assign each browser a unique random number so the site can understand what that browser is interested in.',
          'If you do not identify yourself, we do not know who you are just because a cookie was set. The only personal information in a cookie is information you supply. A cookie cannot read data off your hard drive.',
          'If you click an advertisement, that advertiser may set a cookie of their own. That process is not controlled by Nextgen.'
        ]
      },
      {
        heading: 'Your choice',
        paragraphs: [
          'You can block or delete cookies in your browser settings. Some parts of a site may work less smoothly if cookies are turned off.'
        ]
      }
    ]
  },
  terms: {
    title: 'Terms and Conditions',
    sections: [
      {
        heading: 'Agreement',
        paragraphs: [
          'These terms apply to visitors of the Nextgen Broadband website. If you do not accept them, please leave the site.',
          'Nextgen Broadband, its divisions, subsidiaries and associate companies may revise these terms by updating this page. Please check it from time to time. The current terms bind everyone who uses the website.'
        ]
      },
      {
        heading: 'Security',
        paragraphs: [
          'Visitors must not try to break the security of the website. That includes opening data or accounts you are not allowed to use, probing or testing a system without permission, interfering with the service (including viruses, flooding or crashing), and sending unsolicited promotions.',
          'Breaking system or network security can lead to civil or criminal liability. Nextgen may investigate activity that looks like a violation and may work with law enforcement.'
        ]
      },
      {
        heading: 'Liability',
        paragraphs: [
          'To the extent the law allows, Nextgen’s total liability to a user for claims connected to the service will not exceed the amount that user paid for the service that gave rise to the claim, if any amount was paid.'
        ]
      }
    ]
  },
  refund: {
    title: 'Refund and Cancellation',
    updated: 'Last updated on December 13, 2020',
    sections: [
      {
        heading: 'Our approach',
        paragraphs: [
          'The aim is complete customer satisfaction. If you are unhappy with the service, the money can be refunded when the reasons are genuine and have been checked.',
          'Read the details of a plan before you buy it. Those details describe the service you are purchasing.'
        ]
      },
      {
        heading: 'Cancellation',
        paragraphs: [
          'To cancel, contact us through the contact page. A request that arrives later than 3 business days before the end of the current service period is treated as a cancellation for the next service period.'
        ]
      },
      {
        heading: 'Refunds',
        paragraphs: [
          'If you are not satisfied, a refund can be provided after the reason is reviewed. When the original payment was by credit card, the refund goes back to that card. Payments made through a payment gateway are refunded to the same account.'
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Policies</p>
    <h1>{{ page().title }}</h1>
    @if (page().updated) { <p>{{ page().updated }}</p> }
  </div>
</section>
<section class="section">
  <div class="container legal-copy">
    @for (section of page().sections; track section.heading) {
      <h2>{{ section.heading }}</h2>
      @for (paragraph of section.paragraphs; track paragraph) { <p>{{ paragraph }}</p> }
    }
    <p><a routerLink="/contact" class="text-link">Contact the team</a></p>
  </div>
</section>
`
})
export class LegalComponent {
  private route = inject(ActivatedRoute);
  readonly page = toSignal(
    this.route.data.pipe(map(data => PAGES[String(data['id'] ?? 'privacy')] ?? PAGES['privacy'])),
    { initialValue: PAGES[String(this.route.snapshot.data['id'] ?? 'privacy')] ?? PAGES['privacy'] }
  );
}
