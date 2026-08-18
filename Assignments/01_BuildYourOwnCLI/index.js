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

export const main = () => {
  inquirer
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
    .then((answers) => {
      switch (answers.chooseAction) {
        case choices.createNewTask:
          inquirer
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
            .then((answers) => {
              createTask(answers.title, answers.description);
              console.log("Task created successfully");
              main();
            });
          break;

        case choices.viewTasks:
          console.log(getTasks());
          main();
          break;

        case choices.updateTask:
          inquirer
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
            .then((answers) => {
              updateTask(answers.id, answers.title, answers.description);
              main();
            });
          break;

        case choices.deleteTask:
          inquirer
            .prompt([
              {
                type: "input",
                name: "id",
                message: "ID task deleted: ",
              },
            ])
            .then((answers) => {
              deleteTask(answers.id);
              main();
            });
          break;

        case choices.markDone:
          inquirer
            .prompt([
              {
                type: "input",
                name: "id",
                message: "ID task done: ",
              },
            ])
            .then((answers) => {
              markTaskAsDone(answers.id);
              main();
            });
          break;

        case choices.markNotDone:
          inquirer
            .prompt([
              {
                type: "input",
                name: "id",
                message: "ID task not done: ",
              },
            ])
            .then((answers) => {
              markTaskAsNotDone(answers.id);
              main();
            });
          break;

        case choices.exit:
          break;
      }
    });
};

main();
