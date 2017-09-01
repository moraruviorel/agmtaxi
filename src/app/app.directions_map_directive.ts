import { Directive, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

import { MobileDeviceData } from './mobile_device_data';
import { AppComponent } from './app.component';
import { WaypointService } from './waypoint.serve';

import 'rxjs/add/operator/toPromise';

declare var google: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'agm-map-directions'
})
export class DirectionsMapDirective {
  // @Input() mobileDeviceData;

  private origin;
  private destination;
  private waypoints;
  private mobileDeviceData: MobileDeviceData[];

  constructor (public gmapsApi: GoogleMapsAPIWrapper, private waypointService: WaypointService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  async ngOnInit() {

    this.mobileDeviceData = await this.waypointService.getPoints();

    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;
      this.waypoints = [];
      this.setData();

      if ( this.origin != null && this.destination != null && this.waypoints != null) {
        directionsDisplay.setMap(map);
        directionsService.route({
          origin: { lat: this.origin.Latitude, lng: this.origin.Longitude },
          destination: { lat: this.destination.Latitude, lng: this.destination.Longitude },
          waypoints: this.waypoints,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        },
        function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
    });
  }

  async setData() {
    if (this.mobileDeviceData != null) {
      for (let i = 0; i < this.mobileDeviceData.length; i++) {
        if (i === 0) {
          this.origin = { Latitude: this.mobileDeviceData[i].Latitude, Longitude: this.mobileDeviceData[i].Longitude };
        } else if ( i === this.mobileDeviceData.length - 1) {
          this.destination = { Latitude: this.mobileDeviceData[i].Latitude, Longitude: this.mobileDeviceData[i].Longitude };
        } else {
          this.waypoints.push({location: {lat: this.mobileDeviceData[i].Latitude, lng:  this.mobileDeviceData[i].Longitude} });
        }
      }
    }
  }

  async getWaypoints() {
    this.waypointService.getPoints()
      .then(res => {
        this.mobileDeviceData = res;
    });
  }

}
