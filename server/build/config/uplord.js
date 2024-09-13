"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
var cloudinary_1 = require("cloudinary");
// Cloudinary configuration
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME, // Set your Cloudinary cloud name
    api_key: process.env.API_KEY, // Set your Cloudinary API key
    api_secret: process.env.API_SECRET, // Set your Cloudinary API secret
});
// Multer-Cloudinary Storage configuration
var storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        folder: 'news', // Folder name where the images will be stored on Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file formats
        transformation: [{ width: 800, height: 600, crop: 'limit' }], // Optional image transformation
    },
});
// Configure multer with the cloudinary storage
var upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
