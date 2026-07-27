import { loadTasks } from "./storage.js";

const indexTask = async (id) => {
    const tasks = await loadTasks();
    const index = tasks.findIndex((task) => task.uniqueID === id);
    if (index === -1) {
        console.log(`ID: '${id}' not found`);
        return undefined;
    }
    return index;
}

export { indexTask };
