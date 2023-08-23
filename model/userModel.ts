import mongoose from "mongoose";
import {iUser, iUserData} from "../utils/interface"

const userModel = new mongoose.Schema<iUser>(
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
    articles: [
      {
        type: mongoose.Types.ObjectId,
        ref: "articles",
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model<iUserData>("users", userModel);