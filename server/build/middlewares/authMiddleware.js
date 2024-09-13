"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT_SECRET = "e41a61f62fba0ea39087c995813417332573421223cb8182052c6417a47dc586" || process.env.JWT_SECRET;
var authMiddleware = function (req, res, next) {
    var _a;
    var token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '').trim();
    console.log('Token:', token);
    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return;
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        var id = decoded.id;
        console.log('User id:', id);
        req.user = { id: id };
        next();
    }
    catch (err) {
        console.error('Token verification error:', err.message);
        res.status(401).json({ message: 'Token is not valid', error: err.message });
    }
};
exports.default = authMiddleware;
