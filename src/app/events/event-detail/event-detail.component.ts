import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { MicroEvent } from '../../shared/domain/micro-event';
import { MicroEventService } from '../../shared/domain/micro-event.service';

import { Observable } from 'rxjs';

interface RouterParams {
  id: number;
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event$: Observable<MicroEvent>;

  constructor(private _route: ActivatedRoute, 
              private _microEventService: MicroEventService) { }

  ngOnInit() {
    this._route.params.subscribe((params: RouterParams) => {
      this.event$ = this._microEventService.findById(params.id);
    });
  }

}
