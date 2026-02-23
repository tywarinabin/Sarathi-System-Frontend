import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  stats = [
    { label: 'Total Queries', value: '1,245', icon: 'chat', color: '#10b981' },
    { label: 'Documents', value: '428', icon: 'documents', color: '#3b82f6' },
    { label: 'Avg Response', value: '245ms', icon: 'clock', color: '#f59e0b' },
    { label: 'Success Rate', value: '98.5%', icon: 'check', color: '#8b5cf6' }
  ];

  activities = [
    {
      title: 'What is RAG architecture?',
      time: '2 hours ago',
      type: 'query'
    },
    {
      title: 'How to index documents?',
      time: '5 hours ago',
      type: 'query'
    },
    {
      title: 'Integration with APIs',
      time: '1 day ago',
      type: 'document'
    },
    {
      title: 'System update completed',
      time: '2 days ago',
      type: 'system'
    }
  ];

  quickActions = [
    { label: 'New Chat', icon: 'plus', route: '/dashboard/chat' },
    { label: 'Upload Docs', icon: 'upload', route: '/dashboard/documents' },
    { label: 'View History', icon: 'history', route: '/dashboard/history' }
  ];
}
