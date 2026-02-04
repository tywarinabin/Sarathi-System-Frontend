import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Line Break Pipe
 * Converts newline characters to HTML line breaks
 */
@Pipe({
  name: 'lineBreaky',
  standalone: true
})
export class LineBreakPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) {
      return '';
    }

    // Escape HTML and convert newlines to <br>
    const escaped = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/\n/g, '<br>');

    return this.sanitizer.bypassSecurityTrustHtml(escaped);
  }
}
