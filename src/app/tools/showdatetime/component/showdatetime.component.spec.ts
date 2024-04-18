import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDateTimeComponent } from './showdatetime.component';

describe('ShowDateTimeComponent', () => {
  let component: ShowDateTimeComponent;
  let fixture: ComponentFixture<ShowDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDateTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
