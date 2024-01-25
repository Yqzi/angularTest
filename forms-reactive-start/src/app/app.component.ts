import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup
  usedUsernames = ['lary', 'dary'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.usedNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  usedNames(control: FormControl): { [s: string]: boolean } {
    if (this.usedUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsNoNo': true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
