import mongoose from "mongoose";

interface iUser {
  name?: string;
  password?: string;
  email?: string;
  avatar?: string;
  avatarID?: string;
  friends?: string[];
  request?:string[];
  post?: {}[];
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
    friends:{
      type:Array<String>,
    },
    request:{
      type:Array<String>,
    },
    post: [
      {
        type: mongoose.Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model<iUserData>("users", userModel);