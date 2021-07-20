import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormTabComponent } from './user-form-tab.component';

describe('UserFormTabComponent', () => {
  let component: UserFormTabComponent;
  let fixture: ComponentFixture<UserFormTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
