import { loadTasks } from "./storage.js";

function indexTask(id) {
    const tasks = loadTasks();
    const index = tasks.findIndex((task) => task.uniqueID === id);
    if (index === -1) {
        console.log(`ID: '${id}' not found`);
        return undefined;
    }
    return index;
}

export { indexTask };
