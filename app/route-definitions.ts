import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LeftMenuComponent } from './components/left-menu.component';
import { TopMenuComponent } from './components/top-menu.component';
import { MainPageComponent } from './components/main-page.component';
import { LoginComponent } from './components/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mainpage',      component: MainPageComponent },
  { path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  { path: '**', component: MainPageComponent }
];