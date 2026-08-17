import { v4 as uuidv4 } from "uuid";
import { loadTasks, saveTasks } from "./storage.js";
import { indexTask } from "./utils.js";

const createTask = (title, description) => {
    const newTask = {
        uniqueID: uuidv4(),
        title,
        description,
        status: "not done",
    };
    const tasks = loadTasks();
    tasks.push(newTask);
    saveTasks(tasks);
};

const getTasks = () => {
    return loadTasks();
};

const getTask = (id) => {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.uniqueID === id);
    if (!task) {
        console.log(`ID: '${id}' not found`);
        return;
    }
    return task;
};

const updateTask = (id, title, description) => {
    const tasks = loadTasks();
    const index = indexTask(id, tasks);
    if (index === undefined) {
        return;
    }
    tasks[index].title = title;
    tasks[index].description = description;
    saveTasks(tasks);
};

const deleteTask = (id) => {
    const tasks = loadTasks();
    const index = indexTask(id, tasks);
    if (index === undefined) {
        return;
    }
    tasks.splice(index);
    saveTasks(tasks);
};

const markTaskAsDone = (id) => {
    const tasks = loadTasks();
    const index = indexTask(id, tasks);
    if (index === undefined) {
        return;
    }
    tasks[index].status = "done";
    saveTasks(tasks);
};

const markTaskAsNotDone = (id) => {
    const tasks = loadTasks();
    const index = indexTask(id, tasks);
    if (index === undefined) {
        return;
    }
    tasks[index].status = "not done";
    saveTasks(tasks);
};

export { createTask, deleteTask, getTask, getTasks, markTaskAsDone, markTaskAsNotDone, updateTask };
