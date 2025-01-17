import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component'; 

@Component({
  selector: 'app-about-the-fold',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './about-the-fold.component.html',
  styleUrl: './about-the-fold.component.scss'
})
export class AboutTheFoldComponent {

}
