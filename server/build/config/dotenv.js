"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in environment variables');
}
if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI in environment variables');
}
