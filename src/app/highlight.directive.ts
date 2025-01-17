import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  private originalChar: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'color 0.1s');
  }

  @HostListener('mouseenter') onMouseEnter() {
    const char = this.el.nativeElement.textContent;
    if (char) {
      this.originalChar = char; // Ursprungsbuchstabe speichern
      const transformedChar =
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      this.renderer.setProperty(this.el.nativeElement, 'textContent', transformedChar);
      this.renderer.setStyle(this.el.nativeElement, 'color', '#F7C518'); // Schriftfarbe ändern
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.originalChar) {
      this.renderer.setProperty(this.el.nativeElement, 'textContent', this.originalChar);
      this.renderer.removeStyle(this.el.nativeElement, 'color'); // Schriftfarbe zurücksetzen
    }
  }
}
