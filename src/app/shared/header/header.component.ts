import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component} from '@angular/core';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
