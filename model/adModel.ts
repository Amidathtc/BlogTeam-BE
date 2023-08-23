import mongoose from "mongoose"
import { iAds } from "../utils/interface"

const adData = new mongoose.Schema<iAds>(
  {
    title : {
      type : String,
      required: true,
    },
    description: {
      type : String,
      required: true,
    },
    ImageURL : {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model<iAds>("ad", adData);
