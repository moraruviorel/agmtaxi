import { Component, OnInit } from '@angular/core';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  styleUrls: [`./app.component.css`],
  templateUrl: './app.component.html'
})

export class AppComponent {
  // google maps zoom level
  zoom = AppSettings.Zoom;
  // initial center position for the map
  lat = AppSettings.Center_Point_Lat;
  lng = AppSettings.Center_Point_Lng;
}
