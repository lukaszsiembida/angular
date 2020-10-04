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

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TabComponentComponent,
    TabContentComponentComponent,
    MyDirectiveDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // zad14
    HttpClientModule // zad 15
    //   FormsModule // dla zadania 13
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
