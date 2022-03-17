import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCollectionComponent } from './events/event-collection/event-collection.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { ProfileCollectionComponent } from './profiles/profile-collection/profile-collection.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/events'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: 'profiles',
    loadChildren: './profiles/profiles.module#ProfilesModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
