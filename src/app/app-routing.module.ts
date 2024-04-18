import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/component/home.component';
import { ShowIpComponent } from './tools/show-ip/component/show-ip.component';
import { ShowDateTimeComponent } from './tools/showdatetime/component/showdatetime.component';
import { PostComponent } from './post/new/component/post.component';


const ROUTES: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'tools/show-ip',
		component: ShowIpComponent,
	},
	{
		path: 'tools/showdatetime',
		component: ShowDateTimeComponent,
	},
	{
		path: 'post/new',
		component: PostComponent,
	},
];


@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
