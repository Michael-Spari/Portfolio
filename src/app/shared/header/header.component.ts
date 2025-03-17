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
    this.currentLanguage = localStorage.getItem('language') || 'de';
    this.translate.use(this.currentLanguage);
    this.isSwitched = JSON.parse(localStorage.getItem('isSwitched') || 'false');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    this.toggleSwitch();
    localStorage.setItem('isSwitched', JSON.stringify(this.isSwitched));
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
