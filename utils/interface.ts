
import mongoose from "mongoose";

export interface iComment {
  comment?: string;
  userName?: string;
  userAvatar?: string;
  likes?: [];
  post?: {};
}
export interface iAds {
  title : string;
  description : string;
  ImageURL : string;
  createdAt : Date;
  updatedAt  :Date;
}
export interface iAdmin {
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
  comments?: [];
}

export interface iUserData extends iUser , mongoose.Document{}
export interface iArticleData extends iArticle , mongoose.Document{}