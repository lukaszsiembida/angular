import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exists = true;
  toggleExists(): void {
    this.exists = !this.exists;
  }
}
