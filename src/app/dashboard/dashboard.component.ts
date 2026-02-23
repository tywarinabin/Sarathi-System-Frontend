import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IconComponent } from '../shared/icons/icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, IconComponent, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('sidebarToggle') sidebarToggle!: ElementRef;

  userEmail = '';
  isSidebarOpen = true;
  private destroy$ = new Subject<void>();

  menuItems = [
    { label: 'Overview', route: '/dashboard/overview', icon: 'dashboard' },
    { label: 'Chat', route: '/dashboard/chat', icon: 'chat' },
    { label: 'Documents', route: '/dashboard/documents', icon: 'documents' },
    { label: 'History', route: '/dashboard/history', icon: 'history' },
    { label: 'Analytics', route: '/dashboard/analytics', icon: 'analytics' },
    { label: 'Settings', route: '/dashboard/settings', icon: 'settings' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const email = this.authService.getEmail();
    if (email) {
      this.userEmail = email;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
