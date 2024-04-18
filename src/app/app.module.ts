import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/component/home.component';
import { ToolsModule } from './tools/tools.module';
import { PostModule } from './post/post.module';
import { HomeModule } from './home/home.module';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		HomeModule,
		ToolsModule,
		PostModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
