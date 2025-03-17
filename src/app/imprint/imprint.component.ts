import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslatePipe, RouterLink, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
