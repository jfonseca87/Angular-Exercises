import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfourComponent } from './sectionfour.component';

describe('SectionfourComponent', () => {
  let component: SectionfourComponent;
  let fixture: ComponentFixture<SectionfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
