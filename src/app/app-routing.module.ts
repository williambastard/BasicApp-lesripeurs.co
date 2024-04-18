import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowIpComponent } from './tools/show-ip/show-ip.component';


const ROUTES:Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'tools/show-ip',
		component: ShowIpComponent,
	},
];


@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {})],
	exports: [RouterModule]
})
export class AppRoutingModule {}
