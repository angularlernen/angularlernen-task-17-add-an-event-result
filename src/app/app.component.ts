import { Component } from '@angular/core';
import { ProfilePictureClickedEvent } from './shared/profile-picture/profile-picture.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  profileSelected(profileName: ProfilePictureClickedEvent): void {
    console.log(profileName);
  }
}
