import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormToolbarComponent } from './user-form-toolbar.component';

describe('UserFormToolbarComponent', () => {
  let component: UserFormToolbarComponent;
  let fixture: ComponentFixture<UserFormToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
