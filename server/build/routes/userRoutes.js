"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
var router = (0, express_1.Router)();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
router.get('/profile', authMiddleware_1.default, userController_1.getUserProfile);
exports.default = router;
