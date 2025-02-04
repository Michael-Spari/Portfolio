import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "@ngx-translate/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
