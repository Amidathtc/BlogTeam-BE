
import mongoose from "mongoose";
export interface iAds {
  title : string;
  description : string;
  ImageURL : string;
  createdAt : Date;
  updatedAt  :Date;
}
export interface iUser {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
  articles?: {}[];
}

export interface iUser {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
  articles?: {}[];
}
export interface iArticle {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
  imageID?: string;
  userID: string;
 rate?: number;
  ratings?: [];
  likes?: [];
  category?: [];
  categoryName?: [];
  user?: {};
}

export interface iUserData extends iUser , mongoose.Document{}
export interface iArticleData extends iArticle , mongoose.Document{}