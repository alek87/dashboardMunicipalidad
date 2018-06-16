import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitoDetailComponent } from './transito-detail.component';

describe('TransitoDetailComponent', () => {
  let component: TransitoDetailComponent;
  let fixture: ComponentFixture<TransitoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
