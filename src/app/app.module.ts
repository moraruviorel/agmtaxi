
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WaypointService } from './waypoint.serve';
import { AppComponent } from './app.component';
import { DirectionsMapDirective } from './app.directions_map_directive';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSCgYjxZokNoV5y1QX1_Y2s0c1z60lWdM'
    }) ],
  declarations: [ DirectionsMapDirective, AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ WaypointService ],
})
export class AppModule {}
