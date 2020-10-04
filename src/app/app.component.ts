import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MyDirectiveDirective} from './my-directive.directive';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserData} from './model/UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MoviesServiceService]   // dla zadania 10-12
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      id: new FormControl(),
      userId: new FormControl(),
      title: new FormControl(),
      body: new FormControl()
    })
  }

  onSubmit(): void{
    console.log(this.signupForm);
  }

  loadValues(): void {
this.http.get('http://jsonplaceholder.typicode.com/posts/1')
  .subscribe((data: {id: number, userId: number, title: string, body: string}) => {
    this.signupForm.controls.id.patchValue(data.id);
    this.signupForm.controls.userId.patchValue(data.userId);
    this.signupForm.controls.title.patchValue(data.title);
    this.signupForm.controls.body.patchValue(data.body)
  });
  }

  // zadanie 15 -18
  // http: HttpClient;
  // modelForm: any;
  // object: UserData = new UserData();
  //
  // constructor(httpClient: HttpClient) {
  //   this.http = httpClient;
  // }
  //
  // ngOnInit(): void {
  //   this.modelForm = new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl(),
  //     age: new FormControl(),
  //     country: new FormControl()
  //   });
  //   // this.getFormServer();  zadanie 15
  //   // this.sendToServer(); // zadanie 16
  //   // this.updateOnServer(); // zadanie 17
  //   this.deleteOnServer(); // zadanie 18
  // }
  //
  // onSubmit(): void {
  //   console.log(this.modelForm.value);
  // }
  //
  // getFormServer(): void {
  //   this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(value => {
  //     this.object = value as UserData; // rzutowanie
  //     console.log(value);
  //   });
  // }
  //
  // sendToServer(): void {
  //   const httpHeader = {
  //     headers: new HttpHeaders({'Content-type': 'application/json ; charset=UTF-8'})
  //   };
  //   const body: UserData = {title: 'foo', body: 'bar', userId: 1} as UserData;
  //   this.http.post('http://jsonplaceholder.typicode.com/posts/', body, httpHeader)
  //     .subscribe(response => {
  //       this.object = response as UserData;
  //       console.log(response);
  //     });
  // }
  //   updateOnServer(): void{
  //     const httpHeader = {
  //       headers: new HttpHeaders({'Content-type': 'application/json ; charset=UTF-8'})
  //     };
  //     const body: UserData = {title: 'foo', body: 'bar', userId: 1, id: 1} as UserData;
  //     this.http.put('http://jsonplaceholder.typicode.com/posts/1', body, httpHeader)
  //       .subscribe(response => {
  //         this.object = response as UserData;
  //         console.log(response);
  //       });
  //   }
  //
  //   deleteOnServer(){
  //   this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  //   }


  // zad 15
  // getFormServer(): void{
  //   this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(value => {
  //     this.object = value as UserData; // rzutowanie
  //     console.log(value);
  //   });


  // zadanie 14
  // modelForm: any;
  //
  // ngOnInit(): void {
  //   this.modelForm = new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl(),
  //     age: new FormControl(),
  //     country: new FormControl()
  //   });
  // }
  //
  // onSubmit(): void {
  //   console.log(this.modelForm.value);
  // }


  // zadanie 13
  // @ViewChild('tdForm')
  // tdForm: any;
  //
  // constructor() {
  // }
  //
  // ngOnInit(): void {
  // }
  //
  // onSubmit(): void {
  //   console.log(this.tdForm.value);
  // }

  // zadanie 10-12
  // private service: MoviesServiceService;
  // topMovies: any;
  // bottomMovies: any;
  //
  // constructor(myService: MoviesServiceService) {
  //   this.service = myService;
  // }
  //
  // ngOnInit(): void {
  //   this.topMovies = this.service.getTopMovies();
  //   this.bottomMovies = this.service.getBottomMovies();
  // }


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





