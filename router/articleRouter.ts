import express from "express"
import {createArticle, getAllArticles, getUserArticle, viewFriendArticles,
} from "../controller/articleController"
import { image } from "../utils/multer"

const router = express.Router()

router.route("/view-articles").get(getAllArticles)
router.route("/:userID/create-article").post(image,createArticle)
router.route("/:userID/get-one-article").get(getUserArticle)
router.route("/:userID/read-friend-article").get(viewFriendArticles);

export default router