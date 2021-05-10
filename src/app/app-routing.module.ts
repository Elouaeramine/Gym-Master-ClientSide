import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverGymsPageComponent } from './pages/discover-gyms-page/discover-gyms-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'signup', component: LoginPageComponent},
    {path: 'discovergyms', component: DiscoverGymsPageComponent}

];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents=[LoginPageComponent]