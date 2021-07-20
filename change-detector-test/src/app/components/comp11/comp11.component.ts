import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Comp11Component implements OnInit, DoCheck, AfterContentChecked, AfterViewChecked {
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
    console.log('on init event raised of component 1.1');
  }

  ngDoCheck(): void {
    console.log('do check event raised of component 1.1');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked event raised of component 1.1');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked event raised of component 1.1');
  }

  triggerEvent(): void {
    console.log('triggered event raised');
  }
}
