import { Component, OnInit } from '@angular/core';

export enum ORIENTATION_TYPE {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title = 'MyFormular';
  public orientation: ORIENTATION_TYPE;

  public ngOnInit(): void {
    window.addEventListener('orientationchange', this.onOrientationChange.bind(this), false);
    this.onOrientationChange();
  }

  private onOrientationChange(): void {
    const orientationAngle = (window.screen.orientation) ? window.screen.orientation.angle : window.orientation;

    if (orientationAngle === 0 || orientationAngle === 180) {
      this.orientation = ORIENTATION_TYPE.PORTRAIT;
    } else {
      this.orientation = ORIENTATION_TYPE.LANDSCAPE;
    }
  }
}
