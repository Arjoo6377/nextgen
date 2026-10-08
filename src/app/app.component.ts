import { AfterViewInit, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar.component';
import { FooterComponent } from './shared/footer.component';
import { ConnectPanelComponent } from './shared/connect-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ConnectPanelComponent],
  template: `<app-navbar></app-navbar><main><router-outlet></router-outlet></main><app-footer></app-footer><app-connect-panel></app-connect-panel>`
})
export class AppComponent implements AfterViewInit {
  constructor() {
    inject(Router).events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        setTimeout(() => this.armReveals());
      }
    });
  }

  ngAfterViewInit(): void {
    this.armReveals();
  }

  private armReveals(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.querySelector('main');
    if (!root) return;
    const nodes = root.querySelectorAll('.info-card, .plan, .service-card, .quote, .story-layout, .section-head, .faq article, .form-card, .band, .speed-card, .metrics div');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('shown');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    const view = window.innerHeight * 0.92;
    nodes.forEach((node, index) => {
      const el = node as HTMLElement;
      if (el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      el.style.setProperty('--d', `${(index % 3) * 80}ms`);
      if (el.getBoundingClientRect().top < view) el.classList.add('shown');
      else observer.observe(el);
    });
  }
}
