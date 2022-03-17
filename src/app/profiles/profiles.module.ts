import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfilesComponent } from './profiles.component';
import { ApiModule } from '../api/api.module';
import { ProfileCollectionComponent } from './profile-collection/profile-collection.component';

@NgModule({
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    SharedModule,
    ApiModule
  ],
  declarations: [
    ProfilesComponent, 
    ProfileCollectionComponent
  ],
  exports: [
    ProfileCollectionComponent // TODO: for now, remove it later!
  ]
})
export class ProfilesModule { }
