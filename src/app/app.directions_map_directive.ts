import { Directive, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

import { MobileDeviceTrace } from './mobile_device_trace';
import { MobileDeviceTraceService } from './mobile_device_trace.serve';

declare var google: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'agm-map-directions'
})
export class DirectionsMapDirective {
  @Input() orderId;

  private origin;
  private destination;
  private waypoints;
  private mobileDeviceData: MobileDeviceTrace[];

  constructor (public gmapsApi: GoogleMapsAPIWrapper, private mdtService: MobileDeviceTraceService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  async ngOnInit() {

    this.mobileDeviceData = await this.mdtService.getPoints(this.orderId);

    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;
      this.waypoints = [];
      this.setData();

      if (this.origin != null && this.destination != null && this.waypoints != null) {
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
}
