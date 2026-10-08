import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EVENT_LINKS } from '../event-wifi';

@Component({
  selector: 'app-event-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
<nav class="event-nav" aria-label="Event Wi-Fi sections">
  <div class="container event-nav-inner">
    @for (item of links; track item.path) {
      <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.exact }">{{ item.label }}</a>
    }
  </div>
</nav>`
})
export class EventNavComponent {
  links = EVENT_LINKS;
}
