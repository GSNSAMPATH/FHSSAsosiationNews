"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var newsController_1 = require("../controllers/newsController");
var authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
var router = (0, express_1.Router)();
router.post('/addNews', newsController_1.addNews);
router.get('/News', newsController_1.getNews);
router.delete('/deleteOldNews', authMiddleware_1.default, newsController_1.deleteOldNews);
exports.default = router;
