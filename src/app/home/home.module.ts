import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* imports Angular "core" library modules above and my stuff below */
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';



const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);
/* TypeDecorator */
@NgModule({
  imports: [
    homeRouting,
    SharedModule
  ],  // end imports
  declarations: [
    HomeComponent
  ],  // end declarations
  providers: [
            // stub code here
  ],  // end providers
})
/* Export class */
export class HomeModule {}