"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = __importDefault(require("./tasks"));
const router = express_1.Router();
router.use('/tasks', tasks_1.default);
exports.default = router;
