import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/app-modules/material-module/material.module';
import { HomeComponent } from '@app/components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    MaterialModule
  ],
  providers: []
})
export class SharedModule { }
