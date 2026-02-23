import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings = {
    notifications: true,
    emailAlerts: true,
    darkMode: false,
    autoSave: true
  };

  preferences = [
    {
      group: 'Notifications',
      items: [
        { label: 'Push Notifications', key: 'notifications', description: 'Receive notifications about your queries' },
        { label: 'Email Alerts', key: 'emailAlerts', description: 'Get weekly summary emails' },
        { label: 'Auto-save', key: 'autoSave', description: 'Automatically save your progress' }
      ]
    },
    {
      group: 'Appearance',
      items: [
        { label: 'Dark Mode', key: 'darkMode', description: 'Use dark theme (disabled - Light theme only)' }
      ]
    }
  ];

  saveSettings(): void {
    console.log('Settings saved:', this.settings);
    // Show success message
  }

  resetSettings(): void {
    this.settings = {
      notifications: true,
      emailAlerts: true,
      darkMode: false,
      autoSave: true
    };
  }
}
