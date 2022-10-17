import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello form ngOnInit');
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  title = 'angular-series';
}
