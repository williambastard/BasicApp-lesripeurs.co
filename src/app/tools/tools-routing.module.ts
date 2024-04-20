import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowIpComponent } from './show-ip/component/show-ip.component';
import { ShowDateTimeComponent } from './showdatetime/component/showdatetime.component';

const ROUTES: Routes = [
  {
    path: 'show-ip',
    component: ShowIpComponent,
  },
  {
    path: 'showdatetime',
    component: ShowDateTimeComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class ToolsRoutingModule { }
