import { Request, Response } from "express";
import userModel from "../model/userModel";
import articleModel from "../model/articleModel";
import mongoose from "mongoose";
import cloudinary from "../utils/cloudinary";


export const createArticle = async (req: any, res: Response) => {
  try {
      const { description, content, categoryName, title } = req.body;
      
    const { userID } = req.params;

    const User: any = await userModel.findById(userID);

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.file.path
    ); 

    const article: any = await articleModel.create({
        title,
      description,
        content,
      categoryName,
      userID: User._id,
      image: secure_url,
        imageID: public_id,
    });

      User?.articles.push(new mongoose.Types.ObjectId(article._id));
      User?.save();

    
    return res.status(201).json({
      message: `Article created by ${User.name}`,
      data: article,
    });
  } catch (error:any) {
    return res.status(404).json({
      message: error.message,
      error,
    });
  }
};

export const getOneArticles = async (req: any, res: Response) => {
  try {
    const { userID } = req.params;

    const user: any = await userModel.findById(userID).populate({
      path: "articles",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });

    res.status(201).json({
      message: "user's Article ",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error Found",
      data: error,
    });
  }
};

export const getAllArticles = async (req: any, res: Response) => {
  try {
    const user: any = await articleModel.find();

    res.status(200).json({
      message: "veiwing all Article",
      data: user,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "Error Found",
      data: error.message,
    });
  }
};

// export const getFriendArticles = async (req: any, res: Response) => {
//   try {
//     const { userID } = req.params;

//     const users = await userModel.findById(userID);
//     const article = await articleModel.find();

//     const user: any = await userModel.findById(userID).populate({
//       path: "articles",
//       options: {
//         sort: {
//           createdAt: -1,
//         },
//       },
//     });

//     let data = article?.filter((el: any) =>
//       users?.friends!.includes(el.userID)
//     );

//     res.status(201).json({
//       message: "user's Article ",
//       data,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "Error Found",
//       data: error,
//     });
//   }
// };
