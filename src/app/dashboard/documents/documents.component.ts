import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  documents = [
    {
      name: 'API Documentation.pdf',
      size: '2.4 MB',
      date: '2024-02-20',
      type: 'pdf',
      icon: 'documents'
    },
    {
      name: 'User Guide.docx',
      size: '1.8 MB',
      date: '2024-02-18',
      type: 'doc',
      icon: 'documents'
    },
    {
      name: 'System Architecture.pdf',
      size: '3.2 MB',
      date: '2024-02-15',
      type: 'pdf',
      icon: 'documents'
    },
    {
      name: 'Integration Examples.xlsx',
      size: '950 KB',
      date: '2024-02-10',
      type: 'xlsx',
      icon: 'documents'
    },
    {
      name: 'Quick Start Guide.pdf',
      size: '1.5 MB',
      date: '2024-02-08',
      type: 'pdf',
      icon: 'documents'
    }
  ];

  browseFiles(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Handle file upload
      console.log('Files selected:', files);
    }
  }

  deleteDocument(doc: any): void {
    const index = this.documents.indexOf(doc);
    if (index > -1) {
      this.documents.splice(index, 1);
    }
  }
}
