import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title = 'MyFormular';
  @HostBinding('class.portrait') portraitField = false;
  @HostBinding('class.landscape') landscapeField = true;

  public ngOnInit(): void {
    window.addEventListener('orientationchange', this.onOrientationChange.bind(this), false);
    this.onOrientationChange();
  }

  private onOrientationChange(): void {
    const orientationAngle = (window.screen.orientation) ? window.screen.orientation.angle : window.orientation;
    if (window.screen.orientation) {
      if ( window.screen.orientation.type.includes('portrait') ) {
        this.portraitField = true;
        this.landscapeField = false;
      } else {
        this.portraitField = false;
        this.landscapeField = true;
      }
    } else {
      if (orientationAngle === 0 || orientationAngle === 180) {
        this.portraitField = true;
        this.landscapeField = false;
      } else {
        this.portraitField = false;
        this.landscapeField = true;
      }
    }
  }
}
