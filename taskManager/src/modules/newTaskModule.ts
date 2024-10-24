
export interface task {
    taskName: string,
    taskId: number,
    taskReward: number,
    taskCategory: string,
    taskDate: Date,
}

export const createTask = (name: string, Id: number, reward: number, category: string, date: Date) => {
    const task: task = {
        taskName: name,
        taskId: Id,
        taskReward: reward,
        taskCategory: category,
        taskDate: date,
    }
    return task;
}
