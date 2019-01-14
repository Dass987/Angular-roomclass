import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatIconModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatSelectModule,
		MatListModule,
		MatDividerModule,
		MatGridListModule,
		MatInputModule
	],
  exports: [
		MatButtonModule, 
		MatCheckboxModule,
		MatIconModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatSelectModule,
		MatListModule,
		MatDividerModule,
		MatGridListModule,
		MatInputModule
	],
})

export class MaterialModule { }