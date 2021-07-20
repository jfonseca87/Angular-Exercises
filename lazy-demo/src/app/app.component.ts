import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <div>Hello World! This is the {{ title }} app.</div>
      <button (click)="getLazy1()">Lazy 1</button>
      <button (click)="getLazy2()">Lazy 2</button>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "lazy-demo";

  constructor(
    // Object that indicates where will be components renderized
    private vcf: ViewContainerRef,
    // Object that allows to find the component and all information about of this
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.vcf.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.vcf.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    )
  }

  async getLazy2() {
    this.vcf.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.vcf.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    )
  }
}
