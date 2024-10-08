"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOldPosts = exports.addPosts = exports.getPosts = void 0;
var postModel_1 = __importDefault(require("../models/postModel"));
var cloudinary_1 = __importDefault(require("cloudinary"));
var getPosts = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, postModel_1.default.find().sort({ createdAt: -1 })];
            case 1:
                posts = _a.sent();
                res.status(200).json(posts);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: 'Server error', error: error_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPosts = getPosts;
var addPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, content, imageUrl, cloudinaryPublicId, posts, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, content = _a.content, imageUrl = _a.imageUrl, cloudinaryPublicId = _a.cloudinaryPublicId;
                posts = new postModel_1.default({
                    title: title,
                    content: content,
                    imageUrl: imageUrl,
                    cloudinaryPublicId: cloudinaryPublicId,
                });
                return [4 /*yield*/, posts.save()];
            case 1:
                _b.sent();
                console.log('Post item added:', posts);
                res.status(201).json(posts);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                res.status(500).json({ message: 'Server error', error: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addPosts = addPosts;
var deleteOldPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var oldPosts, _i, oldPosts_1, post_1, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, postModel_1.default.find({ createdAt: { $lte: new Date(Date.now() - 24 * 60 * 60 * 1000) } }).sort({ createdAt: -1 })];
            case 1:
                oldPosts = _a.sent();
                console.log("Found ".concat(oldPosts.length, " old post items."));
                _i = 0, oldPosts_1 = oldPosts;
                _a.label = 2;
            case 2:
                if (!(_i < oldPosts_1.length)) return [3 /*break*/, 6];
                post_1 = oldPosts_1[_i];
                // Delete the image from Cloudinary
                return [4 /*yield*/, cloudinary_1.default.v2.uploader.destroy(post_1.cloudinaryPublicId)];
            case 3:
                // Delete the image from Cloudinary
                _a.sent();
                // Delete the news document from the database
                return [4 /*yield*/, post_1.deleteOne({ _id: post_1._id })];
            case 4:
                // Delete the news document from the database
                _a.sent();
                console.log("Deleted post item: ".concat(post_1._id));
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 2];
            case 6:
                console.log("Deleted ".concat(oldPosts.length, " old post items along with their images."));
                return [3 /*break*/, 8];
            case 7:
                error_3 = _a.sent();
                console.error('Error deleting old post and images:', error_3);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.deleteOldPosts = deleteOldPosts;
