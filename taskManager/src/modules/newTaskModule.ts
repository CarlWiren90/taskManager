
export interface task {
    taskName: string,
    taskId: number,
    taskReward: number,
    taskCategory: string,
}

export const createTask = (name: string, Id: number, reward: number, category: string) => {
    const task: task = {
        taskName: name,
        taskId: Id,
        taskReward: reward,
        taskCategory: category,
    }
    return task;
}
