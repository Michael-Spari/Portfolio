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
}
