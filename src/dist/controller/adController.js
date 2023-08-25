"use strict";
// import { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import Ad from '../model/adModel';
// import { HTTP } from '../error/mainError';
// import adModel from '../model/adModel';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAd = exports.updateAd = exports.getAd = exports.createAd = void 0;
const adModel_1 = __importDefault(require("../model/adModel")); // 
const mainError_1 = require("../error/mainError");
const adModel_2 = __importDefault(require("../model/adModel"));
// Function to clean up expired ads
const cleanupExpiredAds = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentTime = new Date();
        // Find and delete ads that have expired
        yield adModel_1.default.deleteMany({ expirationDate: { $lt: currentTime } });
        console.log("Expired ads cleaned up.");
    }
    catch (error) {
        console.error("Error cleaning up expired ads:", error);
    }
});
// Schedule the cleanup function to run every 24 hours (86400000 milliseconds)
setInterval(cleanupExpiredAds, 86400000);
const createAd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { adsURL } = req.params;
        const { id, content, description } = req.body;
        // const { title, description } = req.body;
        const Ad = yield adModel_2.default.create({
            id,
            content,
            description,
            // imageUrl,
        });
        // user.friends?.push(user.id)
        // Add the ad to the ads array
        (_a = Ad.adsArr) === null || _a === void 0 ? void 0 : _a.push(Ad.id);
        yield Ad.save();
        // Introduce a 2-second delay before sending the response
        setTimeout(() => {
            return res.status(mainError_1.HTTP.CREATED).json({
                message: "Ad created successfully",
                data: Ad === null || Ad === void 0 ? void 0 : Ad.id,
            });
        }, 2000); // 2000 milliseconds
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD_REQUEST).json({
            message: "Error creating ad",
        });
    }
});
exports.createAd = createAd;
const getAd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { adID } = req.params;
        const ad = yield adModel_1.default.findById(adID);
        if (!ad) {
            return res.status(mainError_1.HTTP.NOT_FOUND).json({
                message: 'Ad not found',
            });
        }
        return res.status(mainError_1.HTTP.OK).json({
            message: 'Ad retrieved successfully',
            ad,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD_REQUEST).json({
            message: 'Error retrieving ad',
        });
    }
});
exports.getAd = getAd;
const updateAd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { adID } = req.params;
        const { title, description, imageUrl } = req.body;
        const updatedAd = yield adModel_1.default.findByIdAndUpdate(adID, { title, description, imageUrl }, { new: true });
        if (!updatedAd) {
            return res.status(mainError_1.HTTP.NOT_FOUND).json({
                message: 'Ad not found',
            });
        }
        return res.status(mainError_1.HTTP.OK).json({
            message: 'Ad updated successfully',
            ad: updatedAd,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD_REQUEST).json({
            message: 'Error updating ad',
        });
    }
});
exports.updateAd = updateAd;
const deleteAd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { adID } = req.params;
        const deletedAd = yield adModel_1.default.findByIdAndDelete(adID);
        if (!deletedAd) {
            return res.status(mainError_1.HTTP.NOT_FOUND).json({
                message: 'Ad not found',
            });
        }
        return res.status(mainError_1.HTTP.OK).json({
            message: 'Ad deleted successfully',
            ad: deletedAd,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD_REQUEST).json({
            message: 'Error deleting ad',
        });
    }
});
exports.deleteAd = deleteAd;
