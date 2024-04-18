import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './new/component/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
