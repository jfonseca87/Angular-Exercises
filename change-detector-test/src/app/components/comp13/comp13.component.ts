import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp13',
  templateUrl: './comp13.component.html',
  styleUrls: ['./comp13.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp13Component implements OnInit, DoCheck, AfterContentChecked, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
    console.log('on init event raised of component 1.1.1.1');
  }

  ngDoCheck(): void {
    console.log('do check event raised of component 1.1.1.1');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked event raised of component 1.1.1.1');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked event raised of component 1.1.1.1');
  }
}
