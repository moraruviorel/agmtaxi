import { Component, Directive, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [`./app.component.css`],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  // google maps zoom level
  zoom = 14;
  // initial center position for the map
  lat = 47.0490533;
  lng = 28.863251;
  //
  ngOnInit() {}
}
