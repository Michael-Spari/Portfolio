import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [ TranslatePipe, TranslateDirective],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.scss'
})
export class ThoughtsComponent {

}
