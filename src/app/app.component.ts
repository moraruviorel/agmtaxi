import { Component, Directive, Input, Output, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

// import { AgmCoreModule } from 'angular2-google-maps/core';
import { WaypointService } from './waypoint.serve';
import { Waypoint } from './waypoint';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/then';

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
  @Output() origin: Waypoint;
  @Output() destination: Waypoint;
  @Input() waypoints: Waypoint[];

  constructor( private waypointService: WaypointService ) {}

  getWaypoints(): void {
    this.waypointService
        .getWaypoints()
        .then(heroes => this.waypoints = heroes);
  }

  ngOnInit(): void {
    this.waypoints = [];

    this.getWaypoints();
    console.log(this.waypoints);
    //  for (const point of this.waypoints) {
    //    console.log(point);
    //  }

    // this.waypoints.forEach(function (item) {
    //   console.log(item);
    // });

    this.origin = { Latitude: 46.99372153, Longitude: 28.84769898 };
    this.destination = {Latitude: 47.0242649, Longitude: 28.86690587 };
  }
}
