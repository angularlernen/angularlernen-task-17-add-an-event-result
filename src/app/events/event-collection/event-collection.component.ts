import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';
import { Subscription } from 'rxjs';

import { MicroEvent } from '../../shared/domain/micro-event';
import { MicroEventService } from '../../shared/domain/micro-event.service';

@Component({
  selector: 'app-event-collection',
  templateUrl: './event-collection.component.html',
  styleUrls: ['./event-collection.component.css']
})
export class EventCollectionComponent implements OnInit, OnDestroy {

  events: MicroEvent[] = [];

  private _eventsSub: Subscription;

  constructor(private _microEventService: MicroEventService) { }

  ngOnInit() {
    this._eventsSub = this._microEventService.findAll().subscribe((events: MicroEvent[]) => {
      this.events = events;
    });
  }

  ngOnDestroy() {
    this._eventsSub.unsubscribe();
  }

}