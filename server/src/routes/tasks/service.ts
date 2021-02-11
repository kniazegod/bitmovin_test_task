import Task, { ITask } from '../../models/task';

export default {
  async get_all_tasks(): Promise<Array<Partial<ITask>>> {
    const tasks = await Task.query().select().orderBy('created_at', 'ASC');

    return tasks;
  },

  async delete_task(id: string): Promise<boolean> {
    return !!Task.query()
      .where({ id })
      .delete()
      .catch(() => false);
  },

  async create_task(task: Pick<ITask, 'name'>): Promise<Partial<ITask> | null> {
    const new_task = await Task.query().insert(task);
    return new_task;
  },

  async update_task(
    id: string,
    task_data: Partial<ITask>
  ): Promise<Partial<ITask> | null> {
    const task = await Task.query().select().where({ id }).first();
    if (!task) {
      return null;
    }
    const updated_task = await Task.query().updateAndFetchById(id, task_data);
    return updated_task;
  },
};
