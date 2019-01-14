import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMenuComponent } from './interactive-menu.component';

describe('InteractiveMenuComponent', () => {
  let component: InteractiveMenuComponent;
  let fixture: ComponentFixture<InteractiveMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
