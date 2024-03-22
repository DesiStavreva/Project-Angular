import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from './types/post';
import { Comment } from 'src/app/types/comment';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getPosts() {
    const { apiUrl } = environment;

    return this.http.get<Post[]>(`${apiUrl}/recipes`);
  }

  getComments() {
    const { apiUrl } = environment;
    return this.http.get<Comment[]>(`${apiUrl}/comments`);
  }

  getUsers() {
    return this.http.get<User[]>(this.API);
  }
}
