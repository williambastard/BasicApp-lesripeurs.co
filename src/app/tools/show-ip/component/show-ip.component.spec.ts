import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { ShowIpComponent } from './show-ip.component';

describe('ShowIpComponent', () => {
  let component: ShowIpComponent;
  let fixture: ComponentFixture<ShowIpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ShowIpComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
