import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ENVIRONMENT } from 'src/environments/environment';
import { PostResponse } from './post.service.type';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public userId, public title, public body: string, private _http: HttpClient,) {
    this.userId = userId;
    this.title = title;
    this.body = body;
  }

  post(post: FormGroup) {
    const response = this._http.post<PostResponse>(ENVIRONMENT.services.posts.apiUrls.new, post.getRawValue());
    return response;
  }
}

