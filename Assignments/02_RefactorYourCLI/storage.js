import fs from "fs/promises";

const saveTasks = async (tasks) => {
    const data = JSON.stringify(tasks);
    fs.writeFile("tasks.json", data, "utf8");
};

const loadTasks = async () => {
    let data = await fs.readFile("tasks.json", "utf8");
    if (!data) {
        data = "[]";
    }
    return JSON.parse(data);
};

export { loadTasks, saveTasks };
