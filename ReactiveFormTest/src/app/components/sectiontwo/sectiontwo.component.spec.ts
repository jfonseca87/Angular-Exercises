import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiontwoComponent } from './sectiontwo.component';

describe('SectiontwoComponent', () => {
  let component: SectiontwoComponent;
  let fixture: ComponentFixture<SectiontwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiontwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
