import { Component } from '@angular/core';
/* imports Angular "core" library modules above and my stuff below */


/* TypeDecorator */
@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
/* Export class */
export class FooterComponent {
  today: number = Date.now();
}