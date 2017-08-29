import { Directive, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'agm-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  @Input() waypoints;

  constructor (public gmapsApi: GoogleMapsAPIWrapper) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(map);
      directionsService.route({
        origin: { lat: this.origin.Latitude, lng: this.origin.Longitude },
        destination: { lat: this.destination.Latitude, lng: this.destination.Longitude },
        waypoints: [], // this.waypoints,
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
    });
  }
}
