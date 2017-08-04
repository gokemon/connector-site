  /* lets display errors the same way across every single form on the site 
    without having to copy and paste the same code over and over. 
    A reusable UI functionality component works here   */
import { Component, Input } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */
import { Errors } from './models';


/* TypeDecorator */
@Component({
  selector: 'list-errors',
  templateUrl: './list-errors.component.html'
})
/* TypeDecorator */
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {
      for (let field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  };

  get errorList() { return this.formattedErrors; }
  }

