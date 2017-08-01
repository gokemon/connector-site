import { Component } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */


/* TypeDecorator */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* Export class */
export class AppComponent {
  title = 'Connector is running!';
}
