import express from "express"
import { createCategory, viewCategory } from "../controller/categoryController";

const router = express.Router();

router.route("/view-cat").get(viewCategory)
router.route("/:articleID/cat").get(createCategory)

export default router