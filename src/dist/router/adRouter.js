"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adController_1 = require("../controller/adController");
const router = express_1.default.Router();
router.route("/createAd").post(adController_1.createAd);
router.route("/ad").get(adController_1.getAd);
router.route("/:adID/update").patch(adController_1.updateAd);
router.route("/:adID/delete").delete(adController_1.deleteAd);
exports.default = router;
