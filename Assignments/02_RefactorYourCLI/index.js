import inquirer from "inquirer";
import { createTask, deleteTask, getTasks, markTaskAsDone, markTaskAsNotDone, updateTask } from "./todo.js";

const choices = {
    createNewTask: "create new task",
    viewTasks: "view tasks",
    updateTask: "update task",
    deleteTask: "delete task",
    markDone: "mark task as done",
    markNotDone: "mark task as not done",
    exit: "exit from application",
};

export const main = async () => {
    const choiceMenu = await inquirer
        .prompt([
            {
                type: "select",
                name: "chooseAction",
                message: "Choose action: ",
                choices: [
                    choices.createNewTask,
                    choices.viewTasks,
                    choices.updateTask,
                    choices.deleteTask,
                    choices.markDone,
                    choices.markNotDone,
                    choices.exit,
                ],
            },
        ])

    switch (choiceMenu.chooseAction) {
        case choices.createNewTask:
            {
                const data = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "title",
                            message: "title task: ",
                        },
                        {
                            type: "input",
                            name: "description",
                            message: "description task: ",
                        },
                    ])
                console.log(await createTask(data.title, data.description));
                main();
                break;
            }

        case choices.viewTasks:
            {
                console.log(await getTasks());
                main();
                break;
            }

        case choices.updateTask:
            {
                const data = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "ID task: ",
                        },
                        {
                            type: "input",
                            name: "title",
                            message: "new title task: ",
                        },
                        {
                            type: "input",
                            name: "description",
                            message: "new description task: ",
                        },
                    ])
                console.log(await updateTask(data.id, data.title, data.description));
                main();
                break;
            }

        case choices.deleteTask:
            {
                const data = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "ID task deleted: ",
                        },
                    ])
                console.log(await deleteTask(data.id));
                main();
                break;
            }

        case choices.markDone:
            {
                const data = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "ID task done: ",
                        },
                    ])
                console.log(await markTaskAsDone(data.id));
                main();
                break;
            }

        case choices.markNotDone:
            {
                const data = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "ID task not done: ",
                        },
                    ])
                console.log(await markTaskAsNotDone(data.id));
                main();
                break;
            }

        case choices.exit:
            break;
    }
};

main();
