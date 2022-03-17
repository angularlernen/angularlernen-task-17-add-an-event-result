import { Injectable } from '@angular/core';

import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';

import { ProfileResponse } from '../../api/profile/profile.response';
import { ProfileResource } from '../../api/profile/profile.resource';

import { Profile } from './profile';
import { MicroEvent } from './micro-event';

import { Observable, zip, from } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';


@Injectable()
export class MicroEventService {

  private static parseIsoDatetime(dtstr: string): Date {
    const dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
  }

  constructor(
    private _eventResource: EventResource,
    private _profileResource: ProfileResource) { }

  findAll(): Observable<MicroEvent[]> {

    const eventResponse$ = this._eventResource.findAll().pipe(
      mergeMap((eventResponses: EventResponse[]) => from(eventResponses))
    );

    return this._toMicroEvent(eventResponse$).pipe(
      toArray()
    );
  }

  findById(id: number): Observable<MicroEvent> {
    return this._toMicroEvent(this._eventResource.findById(id));
  }

  private _toMicroEvent(eventResponse$: Observable<EventResponse>): Observable<MicroEvent> {
    return eventResponse$.pipe(
      mergeMap((eventResponse: EventResponse) => {
        const participantsObservables: Observable<Profile>[] = eventResponse.participantIds.map(participantId => this._profileResource.findById(participantId));

        return zip(...participantsObservables).pipe(
          map((participants: Profile[]) => {
            return {
              ...eventResponse,
              participants,
              eventDate: MicroEventService.parseIsoDatetime(eventResponse.eventDate)
            } as MicroEvent;
          })
        );
      }), // Observable<MicroEvent>
    );
  }

}