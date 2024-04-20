import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ENVIRONMENT } from 'src/environments/environment';
import { PostResponse } from './post.service.type';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private _http: HttpClient) {
  }

  post(post: FormGroup) {
    const response = this._http.post<PostResponse>(ENVIRONMENT.services.posts.apiUrls.substitute, post.getRawValue());
    return response;
  }
}

