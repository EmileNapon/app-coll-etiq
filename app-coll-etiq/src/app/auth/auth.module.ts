import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AcceuilComponent } from './acceuil/acceuil.component';




@NgModule({
  declarations: [
    PresentationComponent,AuthComponent, LoginComponent, SignUpComponent, AcceuilComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
