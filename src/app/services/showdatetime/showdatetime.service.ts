import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';
import { GetTime } from './showdatetime.type';


@Injectable({
  providedIn: 'root',
})
export class ShowDateTimeService {
  constructor(
    private _http: HttpClient,
  ) {
  }

  public getTime() {
    return this._http.get<GetTime>(ENVIRONMENT.services.showdatetime.apiUrls.time + '/');
  }
}
