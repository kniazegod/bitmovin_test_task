import { Router } from 'express';

import task_service from './service';

const router = Router();

router.get('/', async (_, res) => {
  const tasks = await task_service.get_all_tasks();

  res.json(tasks)
});

router.post('/new', async (req, res) => {
  const task = await task_service.create_task(req.body.task);

  res.json(task);
});

router.post('/:task_id/update', async (req, res) => {
  const task = await task_service.update_task(req.params.task_id, req.body.task);

  res.json(task);
});

router.post('/:task_id/delete', async (req, res) => {
  const task = await task_service.delete_task(req.params.task_id);

  res.json({ ok: true });
});

export default router;