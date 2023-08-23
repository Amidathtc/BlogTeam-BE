import mongoose from "mongoose";
import { iArticle, iArticleData } from "../utils/interface"

const articleModel = new mongoose.Schema<iArticle>(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    // likes: {
    //   type: Array,
    // },
    userID: {
      type: String,
    },
    // rate: {
    //   type: Number,
    // },
    // ratings: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "ratings",
    //   },
    // ],
    // category: [
    //   {
    //     type: String,
    //   },
    // ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model<iArticleData>("articles", articleModel);
