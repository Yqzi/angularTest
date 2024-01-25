import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultQuestion = 'pet';
  submitted = false;
  user = {
    username: String,
    email: String,
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue(
      {
        userData: {
          username: suggestedName,
        }
      }
    );
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
  }
}
