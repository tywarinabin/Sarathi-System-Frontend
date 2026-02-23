import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  metrics = [
    { label: 'Total Queries', value: '1,245', change: '+12%', trend: 'up' },
    { label: 'Avg Response Time', value: '245ms', change: '-5%', trend: 'down' },
    { label: 'Success Rate', value: '98.5%', change: '+3%', trend: 'up' },
    { label: 'Failed Queries', value: '18', change: '+2%', trend: 'up' }
  ];

  topQueries = [
    { query: 'What is RAG architecture?', count: 145, rating: 4.8 },
    { query: 'How to index documents?', count: 128, rating: 4.6 },
    { query: 'API integration guide', count: 102, rating: 4.7 },
    { query: 'Performance optimization', count: 89, rating: 4.5 }
  ];

  usageByTime = [
    { time: 'Mon', queries: 180 },
    { time: 'Tue', queries: 220 },
    { time: 'Wed', queries: 195 },
    { time: 'Thu', queries: 250 },
    { time: 'Fri', queries: 280 },
    { time: 'Sat', queries: 160 },
    { time: 'Sun', queries: 140 }
  ];
}
