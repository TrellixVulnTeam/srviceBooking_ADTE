import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import {SendAcount} from '../class/account/SendAcount';
import {environment} from '../../../environments/environment.prod';
import {SendServices} from '../class/SendServices';
import {DaysOf} from '../class/Shedule/DaysOf';
import {DayOfWeek} from '../class/Shedule/dateOfweek';

@Injectable()

export  class SheduleServices {
    private url =  environment.Uri + 'Shedules/';
    constructor(private  http: HttpClient) {

    }
    getDaysOfWeek(token: string, month: string, year: string) {
        let  headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.url + '?month=' + month + '&year=' + year, {headers } );
    }
    getallInformation(token: string, id: number) {
        let  headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.url + 'all?id=' + id, {headers } );
    }
    getconcreteDay(token: string, id: number){
        let  headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.url + id, {headers } );
    }
    addDaysofWork(token: string, days: DayOfWeek) {
        let  headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + token);
        return this.http.post(this.url, days, {headers } );
    }
}