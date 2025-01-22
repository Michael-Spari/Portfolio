import { Component } from '@angular/core';
import { AboutTheFoldComponent } from './about-the-fold/about-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    FooterComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'


})
export class MainContentComponent {

}
