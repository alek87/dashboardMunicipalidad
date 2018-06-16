import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitoCreateComponent } from './transito-create.component';

describe('TransitoCreateComponent', () => {
  let component: TransitoCreateComponent;
  let fixture: ComponentFixture<TransitoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
