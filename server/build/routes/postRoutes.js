"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var postController_1 = require("../controllers/postController");
var router = (0, express_1.Router)();
router.post('/addPost', postController_1.addPosts);
router.get('/posts', postController_1.getPosts);
router.delete('/deletePost/:id', postController_1.deleteOldPosts);
exports.default = router;
