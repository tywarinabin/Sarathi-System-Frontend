import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    [attr.viewBox]="'0 0 24 24'"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    [class]="'icon icon-' + name"
    [style.color]="color"
  >
    <ng-container [ngSwitch]="name">
      <!-- Dashboard -->
      <ng-container *ngSwitchCase="'dashboard'">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </ng-container>

      <!-- Chat -->
      <ng-container *ngSwitchCase="'chat'">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </ng-container>

      <!-- History -->
      <ng-container *ngSwitchCase="'history'">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </ng-container>

      <!-- Documents -->
      <ng-container *ngSwitchCase="'documents'">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="11" x2="12" y2="17"></line>
        <line x1="9" y1="14" x2="15" y2="14"></line>
      </ng-container>

      <!-- Analytics -->
      <ng-container *ngSwitchCase="'analytics'">
        <line x1="12" y1="2" x2="12" y2="22"></line>
        <path d="M17 5H9.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5H17"></path>
        <polyline points="21 12 17 8 13 12"></polyline>
      </ng-container>

      <!-- Settings -->
      <ng-container *ngSwitchCase="'settings'">
        <circle cx="12" cy="12" r="3"></circle>
        <path
          d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m0 5.08l-4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24M19.78 19.78l-4.24-4.24m0-5.08l4.24-4.24M23 12h-6m-6 0H5M19.78 4.22l-4.24 4.24m-5.08 0l-4.24-4.24"
        ></path>
      </ng-container>

      <!-- Profile/User -->
      <ng-container *ngSwitchCase="'profile'">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </ng-container>

      <!-- Logout -->
      <ng-container *ngSwitchCase="'logout'">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </ng-container>

      <!-- Search -->
      <ng-container *ngSwitchCase="'search'">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </ng-container>

      <!-- Plus -->
      <ng-container *ngSwitchCase="'plus'">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </ng-container>

      <!-- Trash -->
      <ng-container *ngSwitchCase="'trash'">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </ng-container>

      <!-- Download -->
      <ng-container *ngSwitchCase="'download'">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </ng-container>

      <!-- Upload -->
      <ng-container *ngSwitchCase="'upload'">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 10 12 5 7 10"></polyline>
        <line x1="12" y1="5" x2="12" y2="15"></line>
      </ng-container>

      <!-- Clock -->
      <ng-container *ngSwitchCase="'clock'">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </ng-container>

      <!-- Bookmark -->
      <ng-container *ngSwitchCase="'bookmark'">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </ng-container>

      <!-- Eye -->
      <ng-container *ngSwitchCase="'eye'">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </ng-container>

      <!-- Check -->
      <ng-container *ngSwitchCase="'check'">
        <polyline points="20 6 9 17 4 12"></polyline>
      </ng-container>

      <!-- Arrow Right -->
      <ng-container *ngSwitchCase="'arrow-right'">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </ng-container>

      <!-- Menu -->
      <ng-container *ngSwitchCase="'menu'">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </ng-container>

      <!-- X / Close -->
      <ng-container *ngSwitchCase="'close'">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </ng-container>

      <!-- Default -->
      <ng-container *ngSwitchDefault>
        <circle cx="12" cy="12" r="10"></circle>
      </ng-container>
    </ng-container>
  </svg>`,
  styles: [
    `
      :host {
        display: inline-flex;
      }

      svg {
        display: inline-block;
        vertical-align: middle;
      }
    `
  ]
})
export class IconComponent {
  @Input() name: string = 'dashboard';
  @Input() size: number = 24;
  @Input() color: string = 'currentColor';
}
