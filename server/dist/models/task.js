"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Task extends objection_1.Model {
}
Task.tableName = 'task';
exports.default = Task;
