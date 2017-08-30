import { Component, Directive, Input, Output, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { WaypointService } from './waypoint.serve';
import { Waypoint } from './waypoint';
import 'rxjs/add/operator/toPromise';


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

  constructor(private waypointService: WaypointService) { }

  ngOnInit(): void {
    this.waypoints = [];

    this.waypointService.getWaypointsLocaly()
      .then(waypoints => {
        this.waypoints = waypoints;
        this.origin=this.waypoints[0];
        this.destination=this.waypoints[this.waypoints.length-1]}
      );
  }
}
