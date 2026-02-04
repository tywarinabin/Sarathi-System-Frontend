import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Root Application Component
 * Simple shell component that displays routed components
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent {
  title = 'Sarathi.UI';
}



