import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerModalWindowComponent } from './winner-modal-window.component';

describe('WinnerModalWindowComponent', () => {
  let component: WinnerModalWindowComponent;
  let fixture: ComponentFixture<WinnerModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
