import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HelloWorld } from './practice.component/practice.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // --- Animations

import { MaterialModule } from './material.component/material.component';
import { NavComponent } from './nav/nav.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { UserComponent } from './user/user.component';
import { InteractiveMenuComponent } from './interactive-menu/interactive-menu.component';
import { FormComponent } from './form/form.component';
import { SectionComponent } from './section/section.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';

const routes: Route[] = [
	{path: '', component: SectionComponent},
	{path: 'about', component: AboutComponent},
	{ path: 'content', component: ContentComponent }
];

@NgModule({
  declarations: [
		AppComponent,
		HelloWorld,
		NavComponent,
		LandingHeaderComponent,
		UserComponent,
		InteractiveMenuComponent,
		FormComponent,
		SectionComponent,
		AboutComponent,
		ContentComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
  ],
  providers: [
		DataService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
