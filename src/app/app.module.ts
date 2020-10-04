import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {TabComponentComponent} from './tab-component/tab-component.component';
import {TabContentComponentComponent} from './tab-content-component/tab-content-component.component';
import {MyDirectiveDirective} from './my-directive.directive';
import {MyPipePipe} from './my-pipe.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {APIResolver} from './resolver/API Resolver';

// zad 20
const appRotes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {message: APIResolver} // zad 21
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {page: 'Home page'}
  },
  {
    path: 'news/:newsId',
    component: NewsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
   path: '**',
   component: NotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TabComponentComponent,
    TabContentComponentComponent,
    MyDirectiveDirective,
    MyPipePipe,
    HomeComponent,
    LoginComponent,
    NewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // zad14
    HttpClientModule, // zad 15
    //   FormsModule // dla zadania 13
    RouterModule.forRoot(appRotes) // zad 20
  ],
  providers: [APIResolver /* zad20 */],
  bootstrap: [AppComponent]
})
export class AppModule {
}
