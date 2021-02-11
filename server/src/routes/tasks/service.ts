import Task, { ITask } from '../../models/task';

export default {
  async get_all_tasks() {
    const tasks = await Task.query().select().orderBy('created_at', 'ASC');

    return tasks;
  },

  async delete_task(id: string) {
    return Task.query().where({ id }).delete();
  },

  async create_task(task: Pick<ITask, 'name'>) {
    const new_task = await Task.query().insert(task);
    return new_task;
  },

  async update_task(id: string, task_data: Partial<ITask>) {
    const updated_task = await Task.query().updateAndFetchById(id, task_data);
    return updated_task;
  },
}
