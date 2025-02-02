import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, TranslatePipe, TranslateDirective],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  projects = [
    {
      name: "The Debugger",
      descriptionKey: "projects.debugger.description",
      implementationDetailsKey: "projects.debugger.implementationDetails",
      duration: "3 weeks",
      icons: [
        { icon: "assets/icon/detail/js.png", name: "JavaScript" },
        { icon: "assets/icon/detail/html.png", name: "HTML" },
        { icon: "assets/icon/detail/css.png", name: "CSS" }
      ],
      image: "assets/img/projects/theDebugger.png",
      logo: "Michael Spari - Frontend Developer",
      logoImage: "assets/logo/logo_ms_en_over.png",
      liveTest: "theDebugger/index.html"
    },
    {
      name: "Join",
      descriptionKey: "projects.join.description",
      implementationDetailsKey: "projects.join.implementationDetails",
      duration: "4 weeks",
      icons: [
        { icon: "assets/icon/detail/ts.png", name: "TypeScript" },
        { icon: "assets/icon/detail/angular.png", name: "Angular" },
        { icon: "assets/icon/detail/scss.png", name: "SCSS" }
      ],
      image: "assets/img/projects/join.png",
      logo: "Michael Spari - Frontend Developer",
      logoImage: "assets/logo/logo_ms_en_over.png",
      liveTest: "join/index.html"
    }
  ];

  currentIndex = 0; // Start bei erstem Projekt

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}
