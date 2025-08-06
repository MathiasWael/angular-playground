import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { SignalsComponent } from './features/signals/signals';
import { ComponentsComponent } from './features/components/components';
import { TemplatesComponent } from './features/templates/templates';
import { DirectivesComponent } from './features/directives/directives';
import { FormsComponent } from './features/forms/forms.component';
import { NotFoundComponent } from './features/routing/not-found/not-found.component';
import { RoutingComponent } from './features/routing/routing.component';
import { AdminPage } from './features/routing/admin-page/admin-page';
import { adminGuard } from './guards/guards';

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
        path: 'signals',
        component: SignalsComponent
    },
    {
        path: 'components',
        component: ComponentsComponent
    },
    {
        path: 'templates',
        component: TemplatesComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'routing/admin',
        canActivate: [adminGuard],
        component: AdminPage
    },
    {
        path: 'routing/:id',
        component: RoutingComponent
    },
    {
        path: 'routing',
        component: RoutingComponent,
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
