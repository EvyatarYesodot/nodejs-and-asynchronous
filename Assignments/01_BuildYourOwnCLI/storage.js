import fs from "fs";

const saveTasks = (tasks) => {
    const data = JSON.stringify(tasks);
    fs.writeFileSync("tasks.json", data, "utf8");
};

const loadTasks = () => {
    try {
        const data = fs.readFileSync("tasks.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.log("Error reading file: tasks.json", error);
    }
};

export { loadTasks, saveTasks };
