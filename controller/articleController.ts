import { Request, Response } from "express";
import userModel from "../model/userModel";
import articleModel from "../model/articleModel";
import mongoose from "mongoose";
import cloudinary from "../utils/cloudinary";
import { HTTP } from "../error/mainError";


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

export const likeUserArticle = async (
  req: Request,
  res: Response
) => {
  try {
    const { userID, articleID } = req.params;
    const user: any  = await userModel.findById(userID);

    if (user) {
      const likeArticle: any = await articleModel.findById(articleID);

  
      if (!likeArticle) {
        return res.status(HTTP.BAD_REQUEST).json({
          message : "Article not found",
        })
      }
      if (likeArticle.likes?.includes(user._id)) {
        return res.status(HTTP.CONFILT).json({
          message: "You have liked this article already"
        })
      }
       likeArticle?.likes?.push(user._id);
      likeArticle?.save();



      return res.status(HTTP.CREATED).json({
        message: `post liked by ${user.name}`,
      });
    } else {
      return res.status(HTTP.OK).json({
        message: "you can't do this"
      })
    }
  } catch (error) {
    res.status(HTTP.BAD_REQUEST).json({
      message: "Error Found",
      data: error
    });
  }
};


export const unLikeUserArticle = async (
  req: Request,
  res: Response
) => {
  try {
    const { userID, articleID } = req.params;
    const user = await userModel.findById(userID);

    if (user) {
      const likeArticle: any = await articleModel.findById(articleID);

      likeArticle?.likes?.pull(new mongoose.Types.ObjectId(user?._id));
      likeArticle?.save();

      return res.status(HTTP.CREATED).json({
        message: `post unliked by ${user.name}`,
        data: likeArticle,
      });
    } else {
      return res.status(HTTP.OK).json({
        message: "you can't do this"
      })
    }
  } catch (error) {
    res.status(HTTP.BAD_REQUEST).json({
      message: "Error Found",
      data: error
    });
  }
};