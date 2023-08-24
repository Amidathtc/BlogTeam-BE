
import mongoose from "mongoose";
export interface iAds {
  id: string;
  title: string;
  description?: string;
  // imageUrl?: string;
//   expirationDate: Date;
//   createdAt: Date;
//   updatedAt: Date;
adsURL?:string
  content?: string;
  adsArr?: string[];
}
export interface iUser {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
  articles?: {}[];
  category: [];

  userID: string;
  rate?: number;
  ratings?: [];
  likes?: [];
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
  categoryName?: [];
  user?: {};
}
export interface iUserData extends iUser , mongoose.Document{}
export interface iArticleData extends iArticle , mongoose.Document{}