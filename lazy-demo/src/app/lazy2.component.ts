import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Lazy2aComponent } from './lazy2a.component';
import { Lazy2bComponent } from './lazy2b.component';

@Component({
  template: `
    <p>
      lazy2 works!
    </p>
  `,
  styles: [
  ]
})
export class Lazy2Component implements OnInit {

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const componentFactoryA = this.cfr.resolveComponentFactory(Lazy2aComponent);
    const componentFactoryB = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.vcr.createComponent(componentFactoryA);
    this.vcr.createComponent(componentFactoryB);
  }

}
