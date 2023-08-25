"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adData = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    content: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // imageUrl: {
    //   type: String,
    //   required: true,
    // },
    // expirationDate: {
    //   type: Date
    // }
    // createdAt: Date,
    // updatedAt: Date,
    adsURL: {
        type: String,
    },
    adsArr: {
        type: (Array),
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("ad", adData);
