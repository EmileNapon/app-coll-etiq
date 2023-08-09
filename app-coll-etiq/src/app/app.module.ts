import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { EtiquetageModule } from './etiquetage/etiquetage.module';
import { ProjectModule } from './project/project.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,AuthModule,EtiquetageModule,ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
