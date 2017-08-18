
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectionsMapDirective } from './app.directions_map_directive';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSCgYjxZokNoV5y1QX1_Y2s0c1z60lWdM'
    }) ],
  declarations: [ AppComponent, DirectionsMapDirective ],
  bootstrap: [ AppComponent ],
  providers: [ ],
})
export class AppModule {}
