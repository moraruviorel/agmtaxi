import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { MobileDeviceData } from './mobile_device_data';
import { AppSettings } from './app.settings';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WaypointService {
    private WaypointsUrl = AppSettings.API_ENDPOINT;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    async getPoints(): Promise<MobileDeviceData[]> {
        setInterval(function() { window.location.reload(); }, 15000);
        const points = await this.http.get(this.WaypointsUrl).toPromise().then(response => response.json() as MobileDeviceData[]);
        console.log(points);
        return Promise.resolve(points);
    }

    getWaypoints(): Promise<MobileDeviceData[]> {
        return this.http.get(this.WaypointsUrl)
            .toPromise()
            .then(response => response.json().data as MobileDeviceData[]);
    }
}
