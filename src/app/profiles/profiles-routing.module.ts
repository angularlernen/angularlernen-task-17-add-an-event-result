import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';
import { ProfilesComponent } from './profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    children: [
      {
        path: '',
        component: ProfileCollectionComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
