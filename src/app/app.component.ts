import {Component, OnInit} from '@angular/core';
import {MyDirectiveDirective} from './my-directive.directive';
import {MoviesServiceService} from './movies-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesServiceService]
})
export class AppComponent implements OnInit {
  private service: MoviesServiceService;
  topMovies: any;
  bottomMovies: any;

  constructor(myService: MoviesServiceService) {
    this.service = myService;
  }

  ngOnInit(): void {
    this.topMovies = this.service.getTopMovies();
    this.bottomMovies = this.service.getBottomMovies();
  }


  // Zadanie 7
  // isDark = false;
  //
  // ngOnInit(): void {
  // }
  //
  // changeStyle(): void {
  //   this.isDark = !this.isDark;
  // }

  // zadanie 6
  // borderStyle = '1px solid black';
  // alertStyle = {
  //   color: 'red',
  //   fontWeight: 'bold',
  //   borderBottom: this.borderStyle
  // };
  //
  // style: any;
  //
  // setStyle(style: any): void {
  //   this.style = style;
  // }

  // ngOnInit(): void {
  //   this.setStyle(this.alertStyle);
  // }

  // zadanie 5
  // tab = 0;
  //
  // setTab(num: number): void {
  //   this.tab = num;
  // }
  //
  // isSelected(num: number): boolean {
  //   return this.tab === num;
  // }

  // zadanie 4
  // topMovies = [
  //   {title: 'The Shawshank Redemption', director: 'Frank Darabont'},
  //   {title: 'The Godfaher', director: 'Francis Ford Coppola'},
  //   {title: 'The Godfather 2', director: 'Francis Ford Coppola'},
  //   {title: 'The Dark Knight', director: 'Christopher Nolan'},
  // ];
  // zadanie 3
  // exists = true;
  // toggleExists(): void {this.exists = !this.exists;}
}





