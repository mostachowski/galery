import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LeftMenuComponent } from './components/left-menu.component';
import { TopMenuComponent } from './components/top-menu.component';
import { MainPageComponent } from './components/main-page.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TopMenuComponent,LeftMenuComponent,MainPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
