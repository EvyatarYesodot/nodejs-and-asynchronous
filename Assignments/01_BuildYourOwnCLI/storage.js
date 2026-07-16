import fs from "fs";

const saveTasks = (tasks) => {
    const data = JSON.stringify(tasks);
    fs.writeFileSync("tasks.json", data, "utf8");
};

const loadTasks = () => {
    let data = fs.readFileSync("tasks.json", "utf8");
    if (!data) {
        console.log(`if`);
        data = "[]";
    }
    return JSON.parse(data);
};

export { loadTasks, saveTasks };
