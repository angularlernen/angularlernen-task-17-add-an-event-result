import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api/api.module';
import { EventsComponent } from './events.component';
import { EventCollectionComponent } from './event-collection/event-collection.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FormsModule } from '@angular/forms';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    FormsModule,
    ApiModule
  ],
  declarations: [
    EventsComponent, 
    EventCollectionComponent, EventDetailComponent, EventCreateComponent
  ],
  exports: [
    EventCollectionComponent // TODO: for now, remove it later!
  ]
})
export class EventsModule { }