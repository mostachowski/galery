import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LeftMenuComponent } from './components/left-menu.component';
import { TopMenuComponent } from './components/top-menu.component';
import { MainPageComponent } from './components/main-page.component';
import { LoginComponent } from './components/login.component';

import {appRoutes} from './route-definitions';


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, TopMenuComponent,MainPageComponent, LeftMenuComponent,LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
