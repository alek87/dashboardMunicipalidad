import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitoEditComponent } from './transito-edit.component';

describe('TransitoEditComponent', () => {
  let component: TransitoEditComponent;
  let fixture: ComponentFixture<TransitoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
