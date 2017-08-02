import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
/* imports Angular "core" library modules above and my stuff below */
import { AuthComponent } from './auth.component';



const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);
/* TypeDecorator */
@NgModule({
  imports: [
    authRouting,
    SharedModule
  ],  // end imports
  declarations: [
    AuthComponent
  ],   // end declarations
  providers: [
    // providers listed here
  ]  // end providers
})
/* Export class */
export class AuthModule {
    // stub code here
}