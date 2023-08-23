import mongoose from "mongoose";
import { iUser } from "../utils/interface";

interface iAdmin {
  name?: string;
  password?: string;
  email?: string;
  avatar?: string;
  avatarID?: string;
  friends?: string[];
  request: string[];
  articles?: {}[];
}

interface iAdminData extends iAdmin, mongoose.Document {}

const adminModel = new mongoose.Schema<iAdmin>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    friends: {
      type: Array<String>,
    },
    request: [
      {
        type: Array<String>,
      },
    ],
    articles: [
      {
        type: mongoose.Types.ObjectId,
        ref: "articles",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<iAdminData>("admins", adminModel);