import express from "express";
import {
  createAd,
  getAd,
  updateAd,
  deleteAd,
} from "../controller/adController";

const router = express.Router();

router.route("/").post(createAd);
router.route("/:adID").get(getAd);
router.route("/:adID").patch(updateAd);
router.route("/:adID").delete(deleteAd);

export default router;
