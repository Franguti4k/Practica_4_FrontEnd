import Comment from "./comments.ts";

interface Post { //cambio de los nombres de los valores a los nombres de la api
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

export default Post;
