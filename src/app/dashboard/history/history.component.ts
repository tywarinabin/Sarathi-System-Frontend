import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  histories = [
    {
      id: 1,
      title: 'What is RAG architecture?',
      query: 'Can you explain the concept of RAG (Retrieval-Augmented Generation) and how it works?',
      date: '2024-02-20',
      time: '2:30 PM',
      messages: 5,
      rating: 4.8
    },
    {
      id: 2,
      title: 'How to index documents?',
      query: 'What are the best practices for indexing documents in a retrieval system?',
      date: '2024-02-18',
      time: '10:15 AM',
      messages: 8,
      rating: 4.6
    },
    {
      id: 3,
      title: 'API integration guide',
      query: 'Steps to integrate the Sarathi API into my application?',
      date: '2024-02-15',
      time: '4:45 PM',
      messages: 6,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Performance optimization',
      query: 'How can I optimize the search performance for large datasets?',
      date: '2024-02-10',
      time: '9:20 AM',
      messages: 4,
      rating: 4.5
    },
    {
      id: 5,
      title: 'Troubleshooting errors',
      query: 'Common errors and how to fix them',
      date: '2024-02-08',
      time: '1:10 PM',
      messages: 3,
      rating: 4.3
    }
  ];

  filteredHistories = this.histories;
  searchQuery = '';

  searchHistory(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredHistories = this.histories.filter(h =>
      h.title.toLowerCase().includes(query) ||
      h.query.toLowerCase().includes(query)
    );
  }

  deleteHistory(id: number): void {
    this.histories = this.histories.filter(h => h.id !== id);
    this.searchHistory();
  }
}
