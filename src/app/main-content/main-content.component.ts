import { Component } from '@angular/core';
import { AboutTheFoldComponent } from './about-the-fold/about-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'


})
export class MainContentComponent {

}
