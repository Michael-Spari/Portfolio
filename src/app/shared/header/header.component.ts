import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSwitched = false;
  currentLanguage: any;
  isHamburgerOpen = false; 

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.currentLanguage = this.translate.currentLang || 'de';
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.toggleSwitch();
  }

  toggleSwitch() {
    this.isSwitched = !this.isSwitched;
  }


  toggleHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  closeHamburger() {
    this.isHamburgerOpen = false;
  }
}
