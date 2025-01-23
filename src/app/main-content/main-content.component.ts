import { Component } from '@angular/core';
import { AboutTheFoldComponent } from './about-the-fold/about-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "../shared/footer/footer.component";

ThoughtsComponent
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    ThoughtsComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'


})
export class MainContentComponent {

}
