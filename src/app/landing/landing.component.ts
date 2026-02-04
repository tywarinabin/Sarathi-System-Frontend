import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Landing Page Component
 * Displays the public landing page with features and call-to-action
 * Only visible to unauthenticated users
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  /**
   * Navigate to login page
   */
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  /**
   * Toggle mobile menu
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
