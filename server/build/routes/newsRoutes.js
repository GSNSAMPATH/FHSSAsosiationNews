"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var newsController_1 = require("../controllers/newsController");
var router = (0, express_1.Router)();
// router.post('/addNews', addNews);
router.get('/News', newsController_1.getNews);
// router.delete('/deleteOldNews',authMiddleware, deleteOldNews);
exports.default = router;
