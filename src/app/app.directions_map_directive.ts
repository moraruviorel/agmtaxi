import { Directive, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';


declare var google: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'sebm-google-map-directions'
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
                      // origin: {lat: 47.01419224, lng: 28.82770041},
                      origin: {lat: 46.99372153, lng: 28.84769898},
                      destination: {lat: 47.0242649, lng: 28.86690587},
                      waypoints: this.waypoints,
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                  directionsDisplay.setDirections(response);
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  }
}
