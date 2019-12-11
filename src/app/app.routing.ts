import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../components/signin/signin.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
