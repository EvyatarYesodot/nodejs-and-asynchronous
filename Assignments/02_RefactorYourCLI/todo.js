import { v4 as uuidv4 } from "uuid";
import { loadTasks, saveTasks } from "./storage.js";
import { indexTask } from "./utils.js";

const createTask = async (title, description) => {
    const newTask = {
        uniqueID: uuidv4(),
        title,
        description,
        status: "not done",
    };
    const tasks = await loadTasks();

    if (!Array.isArray(tasks)) {
        const arrTasks = [tasks];
        arrTasks.push(newTask);
        await saveTasks(arrTasks);
        return;
    }
    tasks.push(newTask);
    await saveTasks(tasks);
    return "Task created"
};

const getTasks = async () => {
    return loadTasks();
};

const getTask = async (id) => {
    const tasks = await loadTasks();
    const task = tasks.find((task) => task.uniqueID === id);
    if (!task) {
        console.log(`ID: '${id}' not found`);
        return;
    }
    return task;
};

const updateTask = async (id, title, description) => {
    const tasks = await loadTasks();
    const index = await indexTask(id);
    if (index === undefined) {
        return "Task not found";
    }
    tasks[index].title = title;
    tasks[index].description = description;
    await saveTasks(tasks);
    return "Task updated"
};

const deleteTask = async (id) => {
    const tasks = await loadTasks();
    const index = await indexTask(id);
    if (index === undefined) {
        return "Task not found";
    }
    tasks.splice(index, 1);
    await saveTasks(tasks);
    return "Task deleted"
};

const markTaskAsDone = async (id) => {
    const tasks = await loadTasks();
    const index = await indexTask(id);
    if (index === undefined) {
        return "Task not found";
    }
    tasks[index].status = "done";
    await saveTasks(tasks);
    return "Task changed to: done"
};

const markTaskAsNotDone = async (id) => {
    const tasks = await loadTasks();
    const index = await indexTask(id);
    if (index === undefined) {
        return "Task not found";
    }
    tasks[index].status = "not done";
    await saveTasks(tasks);
    return "Task changed to: not done"
};

export { createTask, deleteTask, getTask, getTasks, markTaskAsDone, markTaskAsNotDone, updateTask };
