import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PresentationComponent } from './auth/presentation/presentation.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AcceuilComponent } from './auth/acceuil/acceuil.component';
import { ListDomainComponent } from './etiquetage/list-domain/list-domain.component';
import { EtiquetageComponent } from './etiquetage/etiquetage.component';
import { AudioClassificationWorkerComponent } from './etiquetage/metier-worker/audio-classification-worker/audio-classification-worker.component';
import { AudioTextWorkerComponent } from './etiquetage/metier-worker/audio-text-worker/audio-text-worker.component';
import { TextClassificationWorkerComponent } from './etiquetage/metier-worker/text-classification-worker/text-classification-worker.component';
import { TextTextWorkerComponent } from './etiquetage/metier-worker/text-text-worker/text-text-worker.component';
import { ProjectComponent } from './project/project.component';
import { AudioClassificationComponent } from './project/worker-project/audio-classification/audio-classification.component';
import { AudioTextComponent } from './project/worker-project/audio-text/audio-text.component';
import { TextClassificationComponent } from './project/worker-project/text-classification/text-classification.component';
import { TextTextComponent } from './project/worker-project/text-text/text-text.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path:'auth',component:AuthComponent,children:[
    {path:'presentation', component:PresentationComponent},
    {path:'login', component:LoginComponent},
    {path:'sign-up', component:SignUpComponent},
    {path:'acceuil', component:AcceuilComponent},

  ]},
  {path:'etiquetage',component:EtiquetageComponent,children:[
    {path:'list-domain', component:ListDomainComponent},
      {path:'audio-classification-worker', component:AudioClassificationWorkerComponent},
      {path:'audio-text-worker', component:AudioTextWorkerComponent},
      {path:'text-classification-worker', component:TextClassificationWorkerComponent},
      {path:'text-text-worker', component:TextTextWorkerComponent}
    ]},
    {path:'project',component:ProjectComponent,children:[
      {path:'audio-classification', component:AudioClassificationComponent},
      {path:'audio-text', component:AudioTextComponent},
      {path:'text-classification', component:TextClassificationComponent},
      {path:'text-text', component:TextTextComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
