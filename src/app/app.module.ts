import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FilterbarComponent } from './DiscGyms/filterbar/filterbar.component';
import { SearchBarComponent } from './DiscGyms/search-bar/search-bar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginHeaderComponent } from './shared/header/login-header/login-header.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { DiscoverGymsPageComponent } from './pages/discover-gyms-page/discover-gyms-page.component';
import { DicoverGymsHeaderComponent } from './shared/header/dicover-gyms-header/dicover-gyms-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GymCardComponent } from './DiscGyms/gym-card/gym-card.component';
import { GymCardsListComponent } from './DiscGyms/gym-cards-list/gym-cards-list.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { BlogCardsListComponent } from './blog/blog-cards-list/blog-cards-list.component';
import { BlogHeaderComponent } from './shared/header/blog-header/blog-header.component';
import { Login2Component } from './login2/login2.component';
import { Login2PageComponent } from './pages/login2-page/login2-page.component';
import {MatIconModule} from '@angular/material/icon';
import { StarRateModule } from 'ng-star-rate';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { GymCardComponent as GymCard }  from './shared/gym-card/gym-card.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FilterbarComponent,
    GymCardComponent,
    SearchBarComponent,
    LoginHeaderComponent,
    LoginPageComponent,
    routingComponents,
    DiscoverGymsPageComponent,
    DicoverGymsHeaderComponent,
    HomePageComponent,
    GymCardsListComponent,
    BlogPageComponent,
      BlogCardComponent,
      BlogCardsListComponent,
      BlogHeaderComponent,
    Login2Component,
    Login2PageComponent,
    GymCard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AppRoutingModule,
    MatIconModule,
    StarRateModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RatingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
