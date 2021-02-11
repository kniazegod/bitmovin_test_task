import Task, { ITask } from '../../models/task';
declare const _default: {
    get_all_tasks(): Promise<Task[]>;
    delete_task(id: string): Promise<number>;
    create_task(task: Pick<ITask, 'name'>): Promise<Task>;
    update_task(task: Partial<ITask>): Promise<Task>;
};
export default _default;
