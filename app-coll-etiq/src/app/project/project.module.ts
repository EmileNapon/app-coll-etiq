import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioClassificationComponent } from './worker-project/audio-classification/audio-classification.component';
import { TextClassificationComponent } from './worker-project/text-classification/text-classification.component';
import { TextTextComponent } from './worker-project/text-text/text-text.component';
import { AudioTextComponent } from './worker-project/audio-text/audio-text.component';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    AudioClassificationComponent,
    TextClassificationComponent,
    TextTextComponent,
    AudioTextComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ProjectModule { }
