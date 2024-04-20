import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
	{
		path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
	},
	{
		path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule)
	},
];


@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
