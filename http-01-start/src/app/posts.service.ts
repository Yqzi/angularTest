import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostsService {

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title: title, content: content}
        this.http.post<{ name: string }>('https://httptest-2ef67-default-rtdb.firebaseio.com/posts.json', 
    postData,
    { observe: 'response' }
    ).subscribe(
      responseData => {
        console.log(responseData);
      }
    );
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://httptest-2ef67-default-rtdb.firebaseio.com/posts.json', {
            headers: new HttpHeaders({'cicici-Headers': 'jello'}),
            params: new HttpParams().set('print', 'pretty'),
        })
    .pipe(map(responseData=> {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key})
        }
      }
      return postsArray;
    }))
    }

    deletePosts() {
        return this.http.delete('https://httptest-2ef67-default-rtdb.firebaseio.com/posts.json');
    }
}