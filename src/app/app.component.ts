import { Component, Directive, Input, OnInit } from '@angular/core';

// import { AgmCoreModule } from 'angular2-google-maps/core';


@Component({
  selector: 'app-root',
  styleUrls: [`./app.component.css`],
  templateUrl: './app.component.html'
})


export class AppComponent {
  // google maps zoom level
  zoom = 14;
  // initial center position for the map
  lat = 47.0490533;
  lng = 28.863251;
  //
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
// just an interface for type safety.
// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
}
