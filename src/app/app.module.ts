import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxiomIconComponent } from './axiom-icon/axiom-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AxiomIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
