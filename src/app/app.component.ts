import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMovies = [
    {title: 'The Shawshank Redemption', director: 'Frank Darabont'},
    {title: 'The Godfaher', director: 'Francis Ford Coppola'},
    {title: 'The Godfather 2', director: 'Francis Ford Coppola'},
    {title: 'The Dark Knight', director: 'Christopher Nolan'},
  ];
  // zadanie 3
  // exists = true;
  // toggleExists(): void {this.exists = !this.exists;}
}





