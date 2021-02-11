import { Model } from 'objection';

export interface ITask {
  id: string
  name: string
  done: boolean;
  user: string;
}

interface Task extends Partial<ITask> {}

class Task extends Model {
  static tableName = 'task'
}

export default Task;
