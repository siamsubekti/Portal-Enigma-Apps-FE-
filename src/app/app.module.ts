import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParticlesModule } from 'angular-particle';
import { ActivationRegisterComponent } from './register/activation/activation-register.component';
import { UnderConstructionComponent } from './dashboard/under-construction.component';
import { RegisterMessageComponent } from './register/message/register-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordForgetComponent,
    ActivationRegisterComponent,
    UnderConstructionComponent,
    RegisterMessageComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Add this only in the root module
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
