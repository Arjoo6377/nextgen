import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ServicesComponent } from './pages/services.component';
import { PricingComponent } from './pages/pricing.component';
import { PayBillComponent } from './pages/pay-bill.component';
import { ContactComponent } from './pages/contact.component';
import { LoginComponent } from './pages/login.component';
import { SpeedTestComponent } from './pages/speed-test.component';
import { SupportComponent } from './pages/support.component';
import { LegalComponent } from './pages/legal.component';
import { EventsWifiComponent } from './pages/events-wifi.component';
import { EventHotspotsComponent } from './pages/event-hotspots.component';
import { EventProjectsComponent } from './pages/event-projects.component';
import { EventPlannerComponent } from './pages/event-planner.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'events', component: EventsWifiComponent },
  { path: 'events/hotspots', component: EventHotspotsComponent },
  { path: 'events/projects', component: EventProjectsComponent },
  { path: 'events/plan', component: EventPlannerComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'pay-bill', component: PayBillComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'speed-test', component: SpeedTestComponent },
  { path: 'support', component: SupportComponent },
  { path: 'privacy-policy', component: LegalComponent, data: { id: 'privacy' } },
  { path: 'cookie-policy', component: LegalComponent, data: { id: 'cookie' } },
  { path: 'terms', component: LegalComponent, data: { id: 'terms' } },
  { path: 'refund', component: LegalComponent, data: { id: 'refund' } },
  { path: '**', redirectTo: '' }
];
