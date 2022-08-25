import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActiveCommentInterface } from '../types/activeComment.interface';
import { CommentInterface } from '../types/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() currentUserId!: string;
  @Input() currentUserName!: string;
  @Input() activeContentId: any;
  @Input() profilePic: any;
  likeArrr: any = [];
  dislikeArrr:any=[];
  //dislikeArr:any=[];
  likeArr: any = [];

  likeStyle:boolean=false;
  dislikeStyle:boolean=false;

  comments: CommentInterface[] = [];
  comments1: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;
  commentsFilter: CommentInterface[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {

    this.commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
      console.log("coments without filterr", this.comments)
      console.log("comments filtering .... ", this.comments.filter((x: any) => {
        return x.courseId == this.activeContentId
      }))

      this.comments = this.comments.filter((x: any) => {
        return x.courseId == this.activeContentId
      })

    });

   
  }

  filter(s: any) {
    return s = this.currentUserId
  }

  getAllFilterComment(){
    console.log("calling getAllComment")
    this.commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
      console.log("coments without filterr", this.comments)
      console.log("comments filtering .... ", this.comments.filter((x: any) => {
        return x.courseId == this.activeContentId
      }))

      this.comments = this.comments.filter((x: any) => {
        return x.courseId == this.activeContentId
      })

    });
   
  }


  getRootComments(): CommentInterface[] {
    return this.comments.filter((comment) => comment.parentId === null);
  }

  updateComment({
    text,
    commentId,
  }: {
    text: string;
    commentId: string;
  }): void {
    this.commentsService
      .updateComment(commentId, text)
      .subscribe((updatedComment) => {
        this.comments = this.comments.map((comment) => {
          if (comment._id === commentId) {
            
            return updatedComment;
          }
         
          return comment;
        });
        this.getAllFilterComment();

        this.activeComment = null;
      });
  }

  deleteComment(commentId: string): void {
    this.commentsService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter(
        (comment) => comment._id !== commentId
        
      );
      this.getAllFilterComment();
    });
  }

  setActiveComment(activeComment: ActiveCommentInterface | null): void {
    console.log("active comment" , activeComment)
    this.activeComment = activeComment;
  }

  addComment({
    text,
    parentId
  }: {
    text: string;
    parentId: string | null;
  }): void {
    this.commentsService
      .createComment(text, parentId, this.currentUserId, this.currentUserName,
        this.activeContentId, this.profilePic,)
      .subscribe((createdComment) => {
        this.comments = [...this.comments, createdComment];
        this.activeComment = null;
        
      });
      this.getAllFilterComment();
  }

  getReplies(commentId: string): CommentInterface[] {
    return this.comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  }

}
