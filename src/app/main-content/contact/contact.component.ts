import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
      name: "",
      email: "",
      message: "",
    }

  mailTest = false;

  isAcceptedPrivacyPolicy: boolean = false;

  post = {
    endPoint: 'https://michaelspari.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isAcceptedPrivacyPolicy) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.isAcceptedPrivacyPolicy = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (!this.isAcceptedPrivacyPolicy) {
      console.error('Privacy policy must be accepted.');
    }
  }
}
