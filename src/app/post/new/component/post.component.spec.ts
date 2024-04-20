import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [ReactiveFormsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
