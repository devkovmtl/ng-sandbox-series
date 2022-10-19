import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // intervalSub: any;

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

  isActive = false;

  items = [
    { name: 'banana' },
    { name: 'apple' },
    { name: 'citrus' },
    { name: 'orange' },
  ];

  item = { name: 'Monika' };

  species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'Goldie', this.species[0]);
  submited = false;

  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // this.intervalSub = setInterval(() => {
    //   console.log('Hello form ngOnInit');
    // }, 1000);
    this.setCurrentClasses();
    this.setCurrentStyle();
    this.logService.logMessage('HEllo from service');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red');
    this.dataService.getData().subscribe((res) => {
      console.log(res);
    });
  }

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

  onSubmit() {
    this.submited = true;
    console.log(this.profileForm.value);
  }

  updateName() {
    this.name.setValue('Nancy');
  }
}
