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
exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
var userModel_1 = __importDefault(require("../models/userModel"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Register a new user
var registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, registationNumber, email, password, image, existingUser, salt, hashedPassword, user, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, name = _a.name, registationNumber = _a.registationNumber, email = _a.email, password = _a.password, image = _a.image;
                return [4 /*yield*/, userModel_1.default.findOne({ email: email })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    res.status(400).json({ message: 'User already exists' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt_1.default.genSalt(10)];
            case 2:
                salt = _b.sent();
                return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
            case 3:
                hashedPassword = _b.sent();
                user = new userModel_1.default({
                    name: name,
                    registationNumber: registationNumber,
                    email: email,
                    password: hashedPassword,
                    image: image,
                });
                // Save the user to the database
                return [4 /*yield*/, user.save()];
            case 4:
                // Save the user to the database
                _b.sent();
                res.status(201).json({ message: 'User registered successfully' });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                res.status(500).json({ message: 'Server error', error: error_1 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.registerUser = registerUser;
// Login a user
var loginUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, isMatch, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                console.log('Email:', email);
                console.log('Password:', password);
                console.log('JWT_SECRET:', process.env.JWT_SECRET);
                return [4 /*yield*/, userModel_1.default.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user) {
                    console.log('User not found');
                    res.status(400).json({ message: 'Invalid credentials' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
            case 2:
                isMatch = _b.sent();
                if (!isMatch) {
                    console.log('Password mismatch');
                    res.status(400).json({ message: 'Invalid credentials' });
                    return [2 /*return*/];
                }
                token = jsonwebtoken_1.default.sign({ id: user._id }, "e41a61f62fba0ea39087c995813417332573421223cb8182052c6417a47dc586", { expiresIn: '1h' });
                console.log('Token generated:', token);
                console.log('User:', user);
                console.log('Sucssessful login');
                res.status(200).json({ token: token, user: user, message: 'Sucssessful login' });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error('Error:', error_2);
                res.status(500).json({ message: 'Server error', error: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = loginUser;
// Get user profile
var getUserProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                // Ensure req.user exists and contains the id
                if (!req.user || !req.user.id) {
                    res.status(400).json({ message: 'User not authenticated' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userModel_1.default.findById(req.user.id).select('-password')];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.status(404).json({ message: 'User not found' });
                    return [2 /*return*/];
                }
                // Respond with user profile data
                res.status(200).json(user);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ message: 'Server error', error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserProfile = getUserProfile;
