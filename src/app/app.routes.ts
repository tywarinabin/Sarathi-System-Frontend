import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'features',
    loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent)
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('./how-it-works/how-it-works.component').then(m => m.HowItWorksComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadComponent: () => import('./dashboard/overview/overview.component').then(m => m.OverviewComponent)
      },
      {
        path: 'chat',
        loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: 'history',
        loadComponent: () => import('./dashboard/history/history.component').then(m => m.HistoryComponent)
      },
      {
        path: 'documents',
        loadComponent: () => import('./dashboard/documents/documents.component').then(m => m.DocumentsComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./dashboard/analytics/analytics.component').then(m => m.AnalyticsComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./dashboard/settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  },
  {
    path: 'home',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: ''
  }
];

