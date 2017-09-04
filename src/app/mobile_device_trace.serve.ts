import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { MobileDeviceTrace } from './mobile_device_trace';
import { AppSettings } from './app.settings';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MobileDeviceTraceService {
    private WaypointsUrl = AppSettings.API_ENDPOINT;

    constructor(private http: Http) { }

    async getPoints(id: number): Promise<MobileDeviceTrace[]> {
        const url = `${this.WaypointsUrl}/${id}`;
        setInterval(function() { window.location.reload(); }, AppSettings.Refresh_Time_Period);
        const points = await this.http.get(url).toPromise().then(response => response.json() as MobileDeviceTrace[]);
        console.log(points);
        return Promise.resolve(points);
    }
}
