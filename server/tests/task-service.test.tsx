import { Model } from 'objection';
import Task from '../src/models/task';
import tasks_service from '../src/routes/tasks/service';
import knex from '../src/knex';

Model.knex(knex);

describe('Task service', () => {
  test('Should add a task', async () => {
    const task = await tasks_service.create_task({ name: 'testing_task' });
    expect(task).toBeDefined();
    expect(task!.name).toBe('testing_task');
    expect(task!.id).toBeDefined();
    await Task.query().where({ id: task!.id }).delete();
  });
  test('Should remove a task', async () => {
    const task = await Task.query().insert({ name: 'another_testing_task' });
    await tasks_service.delete_task(task.id!);
    const deleted_task = await Task.query().where({ id: task.id }).first();
    expect(deleted_task).toBeUndefined();
  });
  test('Should get all tasks', async () => {
    const tasks = await Task.query().select();
    const service_tasks = await tasks_service.get_all_tasks();
    expect(service_tasks).toHaveLength(tasks.length);
  });
  test('Should update done status', async () => {
    const task = await Task.query().insert({ name: 'another_testing_task' });
    const updated_task = await tasks_service.update_task(task.id!, {
      done: true,
    });
    expect(updated_task).toBeDefined();
    expect(updated_task?.done).toBe(true);
    await Task.query().where({ id: task.id }).delete();
  });
});

afterAll(() => {
  knex.destroy();
});
