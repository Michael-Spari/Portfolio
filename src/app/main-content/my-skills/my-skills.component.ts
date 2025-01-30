import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  showFirstImage: boolean = true;

  toggleImage() {
    this.showFirstImage = !this.showFirstImage;
  }

  skills = [
    { name: 'HTML', icon: 'assets/icon/skills/html.png' },
    { name: 'CSS', icon: 'assets/icon/skills/css.png' },
    { name: 'JavaScript', icon: 'assets/icon/skills/js.png' },
    { name: 'TypeScript', icon: 'assets/icon/skills/ts.png' },
    { name: 'Angular', icon: 'assets/icon/skills/angular.png' },
    { name: 'Firebase', icon: 'assets/icon/skills/firebase.png' },
    { name: 'Git', icon: 'assets/icon/skills/git.png' },
    { name: 'Rest-Api', icon: 'assets/icon/skills/api.png' },
    { name: 'Flutter', icon: 'assets/icon/skills/flutter.png' },
    { name: 'Dart', icon: 'assets/icon/skills/dart.png' },
    { name: 'Pinecone', icon: 'assets/icon/skills/pinecone.png' },
    { name: 'Photoshop', icon: 'assets/icon/skills/photoshop.png' },
    { name: 'Illustrator', icon: 'assets/icon/skills/illustrator.png' },
    { name: 'Scrum', icon: 'assets/icon/skills/scrum.png' },
    { name: 'MDesign', icon: 'assets/icon/skills/materialDesign.png' }
  ];
}
