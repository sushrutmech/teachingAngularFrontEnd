import { Injectable } from '@angular/core';
import { CommentInterface } from '../types/comment.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
 //https://fuzzy-getup-moth.cyclic.app/main/
 //online server url
  commentUrl:any="https://fuzzy-getup-moth.cyclic.app/conversation/"
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
      this.commentUrl+`comments`
    );
  }

  createComment(
    text: string,
    parentId: string | null = null, userID: any, username: any, 
    activeContentId: any, profilePic: any ,

  ): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(
        this.commentUrl+`comments`,
      {
        body: text,
        parentId,
        // Should not be set here
        createdAt: new Date().toISOString(),
        userId: userID,
        username: username,
        courseId: activeContentId,
        profilePic: profilePic,
      }
    );
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
     this.commentUrl +`updateComments`,
      {
        Id:id,
        body: text,
      }
    );
  }

  deleteComment(id: string):Observable<any> {
    console.log("delete calilng " , id)
    let Id:any=id;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        Id:id
      }
    }

    return this.httpClient.delete<CommentInterface>(
      this.commentUrl +`comments`,options
     );
    
    
    
  }



}
