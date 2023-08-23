import express from 'express';
import {   getAdmin, getAdmins, postAdByAdmin, registerAdmin, signInAdmin } from '../controller/adminController';
import { upload } from '../utils/multer';


const router = express.Router();


router.route('/admin/ads').post(postAdByAdmin);

router.route("/register").post(upload, registerAdmin);

router.route("/sign-in").post(signInAdmin);
router.route("/get-user").get(getAdmins);

router.route("/:userID/get-user").get(getAdmin);

export default router;
