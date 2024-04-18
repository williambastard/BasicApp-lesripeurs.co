import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './new/component/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    PostRoutingModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
