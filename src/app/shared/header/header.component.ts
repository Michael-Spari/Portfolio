import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  async ngAfterViewInit(): Promise<void> {
    const navTextElements = this.elRef.nativeElement.querySelectorAll('.nav-text');

    for (const element of navTextElements) {
      const textContent = element.textContent || '';
      element.textContent = ''; // Lösche den Textinhalt, um Buchstaben als einzelne Spans einzufügen

      for (const char of textContent) {
        const span = this.renderer.createElement('span');
        this.renderer.appendChild(span, this.renderer.createText(char));
        this.renderer.appendChild(element, span);

        // Bestimme die Farbe des Hintergrundbilds für jede Zeichenposition
        const bgColor = await this.getBgColorAtElementPosition(span);
        const textColor = this.getTextColorBasedOnBg(bgColor);
        this.renderer.setStyle(span, 'color', textColor);
      }
    }
  }

  // Funktion zur Bestimmung der Hintergrundfarbe an der Position des Elements
  async getBgColorAtElementPosition(element: HTMLElement): Promise<string> {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2; // Mittelpunkt des Elements
    const y = rect.top + rect.height / 2;

    const parentElement = this.findBackgroundElement(element);
    const computedStyle = window.getComputedStyle(parentElement);

    if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
      const bgImageUrl = computedStyle.backgroundImage.replace(/url\(["']?(.*?)["']?\)/, '$1');
      return await this.getDominantColorFromImage(bgImageUrl, x, y);
    }

    // Fallback, falls kein Hintergrundbild vorhanden ist
    return 'rgb(255, 255, 255)';
  }

  // Funktion, um das übergeordnete Element mit dem Hintergrund zu finden
  private findBackgroundElement(element: HTMLElement): HTMLElement {
    let currentElement: HTMLElement | null = element.parentElement;

    while (currentElement) {
      const computedStyle = window.getComputedStyle(currentElement);
      if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
        return currentElement;
      }
      currentElement = currentElement.parentElement;
    }

    return document.body; // Fallback auf den Body
  }

  // Funktion, um die dominante Farbe eines Bereichs eines Hintergrundbildes zu extrahieren
  getDominantColorFromImage(imageUrl: string, x: number, y: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Erlaubt das Laden von Bildern von externen Quellen
      img.src = imageUrl;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const scaledX = Math.floor((x / window.innerWidth) * img.width);
          const scaledY = Math.floor((y / window.innerHeight) * img.height);

          const pixel = ctx.getImageData(scaledX, scaledY, 1, 1).data;
          resolve(`rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`);
        } else {
          reject('Canvas Context ist null');
        }
      };

      img.onerror = (error) => reject(error);
    });
  }

  // Funktion zur Bestimmung der Textfarbe basierend auf der Hintergrundfarbe
  getTextColorBasedOnBg(bgColor: string): string {
    const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  }
}