import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component'; 

@Component({
  selector: 'app-about-the-fold',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  template: `
    <section>
        <div><app-header></app-header></div> 
    </section>
    `,
  styleUrl: './about-the-fold.component.scss'
})
export class AboutTheFoldComponent {

}
