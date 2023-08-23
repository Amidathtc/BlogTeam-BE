import express from "express"
import { createArticle, getAllArticles, getOneArticles } from "../controller/articleController"
import { image } from "../utils/multer"

const router = express.Router()

router.route("/view-articles").get(getAllArticles)
router.route("/:userID/create-articles").post(image,createArticle)
router.route("/:userID/get-one-article").get(getOneArticles)

export default router