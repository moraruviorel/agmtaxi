import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { MobileDeviceData } from './mobile_device_data';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WaypointService {
    private WaypointsUrl = 'http://localhost:38110/api/waypoint';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    async getPoints(): Promise<MobileDeviceData[]> {
        const points = await this.http.get(this.WaypointsUrl).toPromise().then(response => response.json() as MobileDeviceData[]);
        return Promise.resolve(points);
    }

    getWaypoints(): Promise<MobileDeviceData[]> {
        return this.http.get(this.WaypointsUrl)
            .toPromise()
            .then(response => response.json().data as MobileDeviceData[]);
    }
}
