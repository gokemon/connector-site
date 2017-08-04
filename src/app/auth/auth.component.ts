import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */
import { Errors, UserService } from '../shared';


/* TypeDecorator */
@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html'
})
/* Export class */
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  // pulling errors from userService
  errors: Errors = new Errors();
  isSubmitting: boolean = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  // OnInit method
  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });
  } // OnInit method

  submitForm() {
    this.isSubmitting = true;
    this.errors = new Errors();

    let credentials = this.authForm.value;
    // check out what you get!
    console.log(credentials);
    this.userService.attemptAuth(this.authType, credentials)
        .subscribe(
          data => this.router.navigateByUrl('/'),
          err => {
            this.errors = err;
            this.isSubmitting = false;
          }
        );
  } // submitForm
} // Export class