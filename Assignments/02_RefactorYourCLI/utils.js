import { loadTasks } from "./storage.js";

const indexTask = (id, tasksArr) => {
    const index = tasksArr.findIndex((task) => task.uniqueID === id);
    if (index === -1) {
        console.log(`ID: '${id}' not found`);
        return undefined;
    }
    return index;
}

export { indexTask };
