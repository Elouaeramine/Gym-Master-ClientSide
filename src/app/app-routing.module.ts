import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { AuthGuard } from './helpers/auth.guard';
import { DiscoverGymsPageComponent } from './pages/discover-gyms-page/discover-gyms-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Login2PageComponent } from './pages/login2-page/login2-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'signup', component: LoginPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'discovergyms', component: DiscoverGymsPageComponent , canActivate : [AuthGuard]},
    {path: 'login', component: Login2PageComponent},
    {path: 'gym/:id', component: HomePageComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginPageComponent];
