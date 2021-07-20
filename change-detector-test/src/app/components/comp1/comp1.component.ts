import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1Component implements OnInit {
  counter = 0;
  message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('on init event raised of component 1');
    // setInterval(() => {
    //   this.counter++;
    // }, 1000);
  }

  incrementCounter(): void {
    this.counter++;
  }
}
