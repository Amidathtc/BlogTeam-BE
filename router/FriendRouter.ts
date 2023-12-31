import express from "express"
import { beFriend, unFriend } from "../controller/FriendsController";


const router = express.Router();

router.route("/:userID/:friendID/add-friend").post(beFriend);
router.route("/:userID/:friendID/un-friend").post(unFriend);

export default router;