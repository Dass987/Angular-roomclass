import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorld } from './practice.component/practice.component';

// --- Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component/material.component';
import { NavComponent } from './nav/nav.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { UserComponent } from './user/user.component';
import { InteractiveMenuComponent } from './interactive-menu/interactive-menu.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
		AppComponent,
		HelloWorld,
		NavComponent,
		LandingHeaderComponent,
		UserComponent,
		InteractiveMenuComponent,
		FormComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
