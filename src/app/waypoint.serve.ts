import { Injectable, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Waypoint } from './waypoint';

@Injectable()
export class WaypointService {
    private WaypointsUrl = 'http://localhost:38110/api/waypoint';
    private headers = new Headers({'Content-Type': 'application/json'});

    public waypoints: Waypoint[] = [];

    constructor(private http: Http) { }

    getWaypoints(): Promise<Waypoint[]> {
        return this.http.get(this.WaypointsUrl)
            .toPromise()
            .then(response => <Waypoint[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
