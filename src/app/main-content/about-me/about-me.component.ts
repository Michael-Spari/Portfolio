import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  title: string = "";
  subline: string = "";
  text: string = "";
  button: string = "";
}
