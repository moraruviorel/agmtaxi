import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Waypoint } from './waypoint';

@Injectable()
export class WaypointService {
    private WaypointsUrl = 'http://localhost:38110/api/waypoint';

    constructor(private http: Http) { }

    getWaypoints(): Promise<Waypoint[]> {

        return this.http.get(this.WaypointsUrl)
            .toPromise()
            .then(response => response.json().data as Waypoint[]);
    }

    getWaypointsLocaly(): Promise<Waypoint[]> {

        var wayPoints: Waypoint[] = [
            { Latitude: 46.99372153, Longitude: 28.84769898 },
            { Latitude: 47.0242649, Longitude: 28.86690587 }
        ];

        return Promise.resolve(wayPoints);
    }
}
