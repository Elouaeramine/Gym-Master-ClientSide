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
import { GymCardComponent } from './DiscGyms/gym-card/gym-card.component';
import { SearchBarComponent } from './DiscGyms/search-bar/search-bar.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginHeaderComponent } from './shared/header/login-header/login-header.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

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
    // LoginPageComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
