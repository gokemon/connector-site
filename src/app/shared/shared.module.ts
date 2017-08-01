import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */

/* TypeDecorator */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],  // end imports
  declarations: [
      // stub code here
  ],  // end declarations
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ]  // end exports
})
/* Export class */
export class SharedModule {
  // stub code here
}
