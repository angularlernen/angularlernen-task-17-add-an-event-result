import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileResponse } from '../../api/profile/profile.response';
import { ProfileResource } from '../../api/profile/profile.resource';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-collection',
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.css']
})
export class ProfileCollectionComponent implements OnInit {

  profiles: ProfileResponse[] = [];
  private _profilesSub: Subscription;

  constructor(private _profileResource: ProfileResource) { }

  ngOnInit() {
    this._profilesSub = this._profileResource.findAll().subscribe((profiles: ProfileResponse[]) => {
      this.profiles = profiles;
    });
  }

  ngOnDestroy() {
    this._profilesSub.unsubscribe();
  }

}