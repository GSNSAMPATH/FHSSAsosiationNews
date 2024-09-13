"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var db_1 = __importDefault(require("./config/db"));
var node_cron_1 = require("./utils/node-cron");
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
(0, db_1.default)();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
// app.use('/api/news', newsRoutes);
// app.use('/api/posts',postRoutes);
(0, node_cron_1.startCron)();
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
