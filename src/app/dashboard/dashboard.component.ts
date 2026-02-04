import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ChatComponent } from '../chat/chat.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Dashboard Component
 * Shows authenticated user content and dashboard with integrated chat
 * Only accessible to authenticated users
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  userEmail = '';
  activeMenu = 'dashboard';
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  /**
   * Angular lifecycle hook - initialize dashboard
   */
  ngOnInit(): void {
    // Get user email from auth service
    const email = this.authService.getEmail();
    if (email) {
      this.userEmail = email;
    }
  }

  /**
   * Angular lifecycle hook - cleanup subscriptions
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Set active menu item
   */
  setActiveMenu(menu: string): void {
    this.activeMenu = menu;
  }

  /**
   * Logout user and redirect to landing page
   */
  logout(): void {
    // Clear all auth data using auth service
    this.authService.logout();

    // Redirect to landing page
    this.router.navigate(['/']);
  }
}
