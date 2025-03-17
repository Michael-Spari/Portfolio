import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, TranslatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  currentProject: any;
  currentIndex = 0;

  projects = [
    {
      id: "the-debugger",
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
      logo: "Michael Spari - Frontend Developer Michael Spari - Frontend Developer",
      logoImage: "assets/logo/logo_ms_en_over.png",
      gitHub: "https://github.com/Michael-Spari/debugg",
      liveTest: "theDebugger/index.html"
    },
    {
      id: "join",
      name: "Join",
      descriptionKey: "projects.join.description",
      implementationDetailsKey: "projects.join.implementationDetails",
      duration: "5 weeks",
      icons: [
        { icon: "assets/icon/detail/css.png", name: "SCSS" },
        { icon: "assets/icon/detail/html.png", name: "HTML" },
        { icon: "assets/icon/detail/fb.png", name: "Firebase" },
        { icon: "assets/icon/detail/angular.png", name: "Angular" },
        { icon: "assets/icon/detail/ts.png", name: "TypeScript" }, 
      ],
      image: "assets/img/projects/join.png",
      logo: "Michael Spari - Frontend Developer Michael Spari - Frontend Developer",
      logoImage: "assets/logo/logo_ms_en_over.png",
      gitHub: "https://github.com/Michael-Spari/join",
      liveTest: "join/index.html"
    },
    {
      id: "pokedex",
      name: "Pokedex",
      descriptionKey: "projects.pokedex.description",
      implementationDetailsKey: "projects.pokedex.implementationDetails",
      duration: "2 weeks",
      icons: [
        { icon: "assets/icon/detail/css.png", name: "SCSS" },
        { icon: "assets/icon/detail/html.png", name: "HTML" },
        { icon: "assets/icon/detail/js.png", name: "JavaScript" }, 
      ],
      image: "assets/img/projects/pokedex.png",
      logo: "Michael Spari - Frontend Developer Michael Spari - Frontend Developer",
      logoImage: "assets/logo/logo_ms_en_over.png",
      gitHub: "https://github.com/Michael-Spari/pokedex_ms",
      liveTest: "pokedex/index.html"
    }
  ];

  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id'); 
      const index = this.projects.findIndex(p => p.id === projectId);
      
      if (index !== -1) {
        this.currentIndex = index;
        this.currentProject = this.projects[this.currentIndex];
      }
    });
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}
