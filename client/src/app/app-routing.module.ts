import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
    { path: 'login', loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule) },
    { path: 'sign-up/simple', loadChildren: () => import('./pages/simple-signup/simple-signup.module').then(m => m.SimpleSignupModule) },
    {
        path: 'vote',
        loadChildren: () => import('./pages/user-ratings/user-ratings.module').then(m => m.UserRatingsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/esc-dashboard/esc-dashboard.module').then(m => m.EscDashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'user-management',
        loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule),
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: 'vote', pathMatch: 'full' },
    { path: '**', redirectTo: 'vote' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
