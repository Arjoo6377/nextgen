import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
<header class="site-header">
  <div class="navbar">
    <div class="nav-inner">
      <a routerLink="/" class="brand" (click)="open = false">
        <img class="brand-logo" src="/images/nextgen-logo.png" alt="Nextgen Broadband">
      </a>
      <button class="menu" type="button" (click)="open = !open" [attr.aria-expanded]="open" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <nav [class.open]="open">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="open = false">Home</a>
        <a routerLink="/services" routerLinkActive="active" (click)="open = false">Services</a>
        <a routerLink="/events" routerLinkActive="active" (click)="open = false">Events</a>
        <a routerLink="/pay-bill" routerLinkActive="active" (click)="open = false">Pay Bill</a>
        <a routerLink="/pricing" routerLinkActive="active" (click)="open = false">Pricing</a>
        <a routerLink="/speed-test" routerLinkActive="active" (click)="open = false">Speed Test</a>
        <a routerLink="/about" routerLinkActive="active" (click)="open = false">About Us</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="open = false">Contact</a>
      </nav>
    </div>
  </div>
</header>`
})
export class NavbarComponent {
  open = false;
}
