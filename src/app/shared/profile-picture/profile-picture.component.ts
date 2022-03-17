import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';

export type ProfilePictureClickedEvent = string;

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: [ './profile-picture.component.scss' ]
})
export class ProfilePictureComponent implements OnInit {

  private colorIndex = 0;
  private pictureIndex = 0;

  private static readonly IMAGE_SRC_BASE = 'https://randomuser.me/api/portraits/women';

  private static readonly FRAME_COLORS = [
    'white',
    'green',
    'blue',
    'red'
  ];

  @Input() diameter = 120;
  @Input() frameColor = 'white';
  @Input() frameWidth = 5;

  @Input() borderColor = 'gray';
  @Input() borderWidth = 2;

  @Input() pictureUrl = `${ProfilePictureComponent.IMAGE_SRC_BASE}/${this.pictureIndex}.jpg`;

  @Input() profileName = 'anonymous';
  @Output() profilePictureClicked = new EventEmitter<ProfilePictureClickedEvent>();


  constructor() {

  }

  ngOnInit(): void {

  }

  get innerDiameter(): number { // computed property
    return this.diameter - this.frameWidth;
  }

  onMouseEnter(): void {
    this.frameColor = ProfilePictureComponent.FRAME_COLORS[ ++this.colorIndex % ProfilePictureComponent.FRAME_COLORS.length ];
  }

  onPictureClicked(): void {
    this.profilePictureClicked.emit(this.profileName);
  }

}