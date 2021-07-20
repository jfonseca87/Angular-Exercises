import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp12',
  templateUrl: './comp12.component.html',
  styleUrls: ['./comp12.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp12Component implements OnInit, OnInit, DoCheck, AfterContentChecked, AfterViewChecked  {
  @Input() set counter(value: number) {
    this.internalCounter = value;
  };
  get counterValue(): number {
    return this.internalCounter;
  }
  internalCounter = 0;

  @Input() set message(value: string) {
    this._internalMessage = value;
  };
  get messageValue(): string {
    return this._internalMessage;
  }
  private _internalMessage: string;

  constructor() { }

  ngOnInit(): void {
    console.log('on init event raised of component 1.1.1');
  }

  ngDoCheck(): void {
    console.log('do check event raised of component 1.1.1');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked event raised of component 1.1.1');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked event raised of component 1.1.1');
  }
}
