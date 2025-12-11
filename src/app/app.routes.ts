// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'wisdom', loadComponent: () => import('./pages/wisdom/wisdom').then(m => m.WisdomComponent) },
  { path: 'practices', loadComponent: () => import('./pages/mindful-practices/mindful-practices').then(m => m.MindfulPracticesComponent) },
  { path: 'practice/:id', loadComponent: () => import('./pages/practice-session/practice-session').then(m => m.PracticeSessionComponent) },
  { path: 'cultural-insights', loadComponent: () => import('./pages/cultural-insights/cultural-insights').then(m => m.CulturalInsightsComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];