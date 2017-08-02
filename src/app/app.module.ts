import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/* imports Angular "core" library modules above and my stuff below */
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

/* TypeDecorator */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],   // end declarations
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AuthModule,
    rootRouting // routing goes last
  ],  // end imports
  providers: [
      // providers listed here
  ],  // end providers
  bootstrap: [AppComponent]
})
/* Export class */
export class AppModule { 
     // stub code here
}
