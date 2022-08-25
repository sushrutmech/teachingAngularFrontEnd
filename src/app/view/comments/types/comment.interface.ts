export interface CommentInterface {
  
  _id: string;
  body: string;
  username: string;
  userId: string;
  parentId: null | string;
  createdAt: string;
  activeContentId:string;
  profilePic:string;
  likeArr:[];
  dislikeArr:[];
}
