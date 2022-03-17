import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventResource } from './event/event.resource';
import { ProfileResource } from './profile/profile.resource';
import { API_BASE_PATH } from './api-base-path.token';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    EventResource,
    ProfileResource,
    {
      provide: API_BASE_PATH,
      useValue: 'http://localhost:3000'
    }
  ]
})
export class ApiModule { }
