import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { HighlightDirective } from './../../highlight.directive';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-about-the-fold',
  standalone: true,
  imports: [HeaderComponent, CommonModule, HighlightDirective, TranslatePipe, TranslateDirective],
  templateUrl: './about-the-fold.component.html',
  styleUrls: ['./about-the-fold.component.scss']
})
export class AboutTheFoldComponent {

  // button: string = "";

}
