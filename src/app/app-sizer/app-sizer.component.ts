import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.scss'],
})
export class AppSizerComponent implements OnInit {
  @Input() size: number = 0;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
