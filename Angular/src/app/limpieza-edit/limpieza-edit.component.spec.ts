import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaEditComponent } from './limpieza-edit.component';

describe('LimpiezaEditComponent', () => {
  let component: LimpiezaEditComponent;
  let fixture: ComponentFixture<LimpiezaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiezaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
