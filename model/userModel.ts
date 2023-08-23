import mongoose from "mongoose";

interface iUser {
  name?: string;
  password?: string;
  email?: string;
  avatar?: string;
  avatarID?: string;
  friends?: string[];
  request: string[];
  articles?: {}[];
}

interface iUserData extends iUser, mongoose.Document {}

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

export default mongoose.model<iUserData>("users", userModel);