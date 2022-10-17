import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // intervalSub: any;

  ngOnInit(): void {
    // this.intervalSub = setInterval(() => {
    //   console.log('Hello form ngOnInit');
    // }, 1000);
    this.setCurrentClasses();
    this.setCurrentStyle();
  }

  // ngOnDestroy(): void {
  //   if (this.intervalSub) {
  //     clearInterval(this.intervalSub);
  //   }
  // }

  showText = false;
  isCheck = false;
  title = 'angular-series';

  todaysDate = new Date();

  fontSizepx = 16;

  isSpecial = true;
  currentClasses = {};
  currentStyle = {};

  toggleText(): void {
    this.showText = !this.showText;
  }

  onSave(): void {
    console.log('Click on save');
  }

  deleteItem(item: string) {
    console.log(item);
  }

  callPhone(phone: string) {
    console.log(phone);
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true,
    };
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-style': 'italic',
      'font-weight': 'bold',
    };
  }
}
