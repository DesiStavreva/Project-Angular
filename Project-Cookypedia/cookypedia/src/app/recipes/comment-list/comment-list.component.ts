import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Comment } from 'src/app/types/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  
  comments: Comment[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getComments().subscribe(comments => {
      console.log(comments);
      this.comments = comments;
    });
  }
}
