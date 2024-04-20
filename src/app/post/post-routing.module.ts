import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './new/component/post.component';


const ROUTES: Routes = [
  {
    path: 'new',
    component: PostComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
