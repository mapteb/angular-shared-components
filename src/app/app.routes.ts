import { Routes } from '@angular/router';
import { Page2 } from './page2/page2';
import { Page1 } from './page1/page1';
import { Home } from './home/home';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home,
    children: [
      { path: 'page1', component: Page1 },
      { path: 'page2', component: Page2},
    ]
  },
];
