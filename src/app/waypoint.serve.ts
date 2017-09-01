import { Injectable, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { MobileDeviceData } from './mobile_device_data';

@Injectable()
export class WaypointService {
    private WaypointsUrl = 'http://localhost:38110/api/waypoint';
    private headers = new Headers({'Content-Type': 'application/json'});

    public waypoints: MobileDeviceData[] = [];

    constructor(private http: Http) { }

    async getPoints(): Promise<MobileDeviceData[]> {
        const points = await this.http.get(this.WaypointsUrl).toPromise().then(response => response.json() as MobileDeviceData[]);

        return Promise.resolve(points);
    }

    getPointsLocaly(): Promise<MobileDeviceData[]> {
        const wayPoints: MobileDeviceData[] = [
            { Latitude: 46.99372153, Longitude: 28.84769898 },
            { Latitude: 47.0242649, Longitude: 28.86690587 },
            { Latitude: 47.0342649, Longitude: 28.88690587 }
        ];
        return Promise.resolve(wayPoints);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
