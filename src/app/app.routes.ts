import { RouterModule ,Routes } from '@angular/router';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';


export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListApplicationsComponent },
    { path: 'add', component: AddApplicationComponent },
];