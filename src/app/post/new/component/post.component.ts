import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, delay, map } from 'rxjs';
import { ENVIRONMENT } from 'src/environments/environment';
import { PostResponse } from '../services/post.service.type';
import { PostService } from '../services/post.service';
import { PostData } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  public postResponse: PostResponse | null = null;
  public postUrl: string = ENVIRONMENT.services.posts.apiUrls.new;
  public loader: string = "wait";
  public postForm!: FormGroup;
  public articlePreview$!: Observable<PostData>;
  constructor(private formBuilder: FormBuilder, private _postservice: PostService) {

  }

  ngOnInit(): void {

    this.postForm = this.formBuilder.group({
      userId: [3, [Validators.required]],
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      body: [null, [Validators.required, Validators.minLength(30), Validators.maxLength(600)]]
    });

    this.articlePreview$ = this.postForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm() {
    this.loader = "loading";
    this._postservice.post(this.postForm).pipe(delay(500)).subscribe((data) => {
      if (data.id) {
        this.loader = "posted";
        this.postResponse = data;
      } else {
        this.loader = "wait";
      }
    });
  }
}
