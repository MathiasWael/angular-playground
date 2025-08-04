import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { TestComponent } from './features/test/test';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'test',
        component: TestComponent
    }
];
