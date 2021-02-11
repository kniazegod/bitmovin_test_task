"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../../models/task"));
exports.default = {
    async get_all_tasks() {
        const tasks = await task_1.default.query().select();
        return tasks;
    },
    async delete_task(id) {
        return await task_1.default.query().where({ id }).delete();
    },
    async create_task(task) {
        const new_task = await task_1.default.query().insert(task);
        return new_task;
    },
    async update_task(task) {
        const updated_task = await task_1.default.query().updateAndFetchById(task.id, task);
        return updated_task;
    }
};
