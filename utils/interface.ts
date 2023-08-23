
import mongoose from "mongoose";
export interface iAds {
  adTitle : string;
  description : string;
  adImage : string;
  adVideo: string;
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