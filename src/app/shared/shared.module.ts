import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { MicroEventService } from './domain/micro-event.service';

@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  exports: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    ApiModule
  ],
  providers: [MicroEventService]
})
export class SharedModule {
}
