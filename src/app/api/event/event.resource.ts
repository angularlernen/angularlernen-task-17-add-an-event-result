import { Injectable, Inject } from '@angular/core';
import { EventResponse } from './event.response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_PATH } from '../api-base-path.token';

@Injectable()
export class EventResource {

  static readonly RESOURCE_EVENTS = '/events';

  constructor(
    @Inject(API_BASE_PATH) private _apiBasePath: string,
    private _http: HttpClient) { }

  findAll(): Observable<EventResponse[]> {
    return this._http.get<EventResponse[]>(`${this._apiBasePath}${EventResource.RESOURCE_EVENTS}`);
  }

  findById(id: number): Observable<EventResponse> {
    return this._http.get<EventResponse>(`${this._apiBasePath}${EventResource.RESOURCE_EVENTS}/${id}`);
  }
  
}
