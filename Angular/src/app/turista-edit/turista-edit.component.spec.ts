import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristaEditComponent } from './turista-edit.component';

describe('TuristaEditComponent', () => {
  let component: TuristaEditComponent;
  let fixture: ComponentFixture<TuristaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
