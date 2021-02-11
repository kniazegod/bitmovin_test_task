"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = __importDefault(require("./service"));
const router = express_1.Router();
router.get('/', async (_, res) => {
    const tasks = await service_1.default.get_all_tasks();
    res.json(tasks);
});
router.post('/new', async (req, res) => {
    const task = await service_1.default.create_task(req.body.task);
    res.json(task);
});
router.post('/update', async (req, res) => {
    const task = await service_1.default.update_task(req.body.task);
    res.json(task);
});
router.post('/:task_id/delete', async (req, res) => {
    const task = await service_1.default.delete_task(req.params.task_id);
    res.json({ ok: true });
});
exports.default = router;
