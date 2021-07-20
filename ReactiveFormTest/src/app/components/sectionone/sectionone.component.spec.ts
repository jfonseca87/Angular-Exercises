import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiononeComponent } from './sectionone.component';

describe('SectiononeComponent', () => {
  let component: SectiononeComponent;
  let fixture: ComponentFixture<SectiononeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiononeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
