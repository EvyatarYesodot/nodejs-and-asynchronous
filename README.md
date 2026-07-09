<h1 id="nodejs-and-asynchronous-code"> NodeJS :rocket: and Asynchronous Code :woman_juggling: </h1>

It is time to delve into **Server-Side** development!

In this section we will learn about **NodeJS**, and **Asynchronous Code**. **NodeJS** is a JavaScript runtime environment built on Chrome"s V8 JavaScript engine. It is an open-source platform that allows us to execute JavaScript code outside a web browser. **Asynchronous Code** is a special part of JavaScript that allows us to handle multiple tasks without waiting for one to finish. It"s like giving JavaScript a superpower to do many things at once. All of this while still being **single-threaded**.

<h2 id="table-of-contents">:scroll: Table of Contents</h2>

- [NodeJS :rocket: and Asynchronous Code :woman_juggling:](#nodejs-and-asynchronous-code)
  - [:scroll: Table of Contents](#table-of-contents)
  - [:rocket: NodeJS](#nodejs)
    - [:computer: Installation](#installation)
    - [:books: Resources](#resources-nodejs)
    - [:clipboard: Topics](#topics-nodejs)
  - [:woman_juggling: Asynchronous Code](#async)
    - [:books: Resources](#resources-async)
    - [:clipboard: Topics](#topics-async)
  - [:bulb: Tips and Tricks](#tips-and-tricks)
    - [:pushpin: Use the env-var package to read environment variables](#use-env-var)
    - [:pushpin: Use ESLint to enforce code style](#use-eslint)
  - [:dart: Assignments (NodeJS and Asynchronous Code)](#assignments)
    - [:dart: Assignment 1 - Build Your Own Synchronous CLI (Command Line Interface) Application](#assignment-1)
      - [:book: Requirements](#assignment-1-requirements)
      - [:clipboard: Instructions](#assignment-1-Instructions)
      - [:books: Resources](#assignment-1-resources)
      - [:star: Bonus](#assignment-1-bonus)
    - [:dart: Assignment 2 - Refactor Your CLI Application to Work Asynchronously](#assignment-2)
      - [:book: Requirements](#assignment-2-requirements)
    - [:dart: Assignment 3 - Refactor a Library Booking System](#assignment-3)
    - [:dart: Assignment 4 - Exploring Promises](#assignment-4)
    - [:dart: ★ Assignment 5 (Bonus) - Joke Generator Script](#assignment-5)
      - [:clipboard: Instructions](#assignment-5-Instructions)
      - [:books: Resources](#assignment-5-resources)

<h2 id="nodejs">:rocket: NodeJS</h2>

<img src="assets/nodejs.svg" align="left" alt="HTML Logo" title="If you don't see the NodeJS logo properly, change to dark mode immediately!" height="50"/>

Think of Node.js as a special tool, it lets us run **JavaScript** outside web browsers. This opens up a whole new world of possibilities. We can now use JavaScript to build **server-side** applications, **command-line** tools, **desktop** applications, and even **mobile** applications.

Why do we care? Because this means that we can write **full-stack** applications (both the **front-end** and the **back-end**) using only **JavaScript**.

We will also cover **NPM** (Node Package Manager), which is a package manager for **Node.js**. It is a command-line tool that allows us to install, update, and remove **Node.js** packages (libraries).

<h3 id="installation">:computer: Installation</h3>

There are many ways to install **Node.js** and **NPM**. We highly recommend using a version manager like [nvm](https://github.com/nvm-sh/nvm).

To install [nvm](https://github.com/nvm-sh/nvm) run the following commands:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
```

Then to install and use the latest version of **Node.js** run the following command:

```bash
nvm install node
```

Run the following command to check that **Node.js** is installed correctly:

```bash
node -v
```

<h3 id="resources-nodejs">:books: Resources</h3>

We recommend using the following resources to learn about **Node.js**. Learn while focusing on the [**topics**](#topics-nodejs) listed below.

- [Node.JS and NPM Video Tutorial](https://www.youtube.com/watch?v=TlB_eWDSMt4) - A great video tutorial to get you started with Node.js and NPM.
- [Node.js official website](https://nodejs.org/en/docs/guides) - Official documentation for Node.js. This is the largest and most comprehensive resource for learning about Node.js.
- [NPM official website](https://docs.npmjs.com/) - Official documentation for NPM.
- [Introduction to Node.JS](https://nodejs.dev/en/learn/) - A beginner-friendly introduction to Node.js.
- [Introduction to NPM](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/) - A beginner-friendly introduction to NPM.
- [Node.JS FileSystem](https://nodejs.org/api/fs.html) - Official documentation for the Node.js File System module.
- [Node.JS Command Line Arguments](https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts) - A tutorial on how to use command-line arguments in Node.js.
- [Node.js environment variables](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs) - A tutorial on how to use environment variables in Node.js.

★ *Even though I highly recommend using the above resources, feel free to use any other resource you find online. Just make sure it is up to date and covers the [**topics**](#topics-nodejs) listed below.*

<h3 id="topics-nodejs">:clipboard: Topics</h3>

- :jigsaw: Node.js Modules
  - Understanding the module system
    - module.exports, require
    - export, import, export default
  - Core Modules
    - os (general overview is enough)
    - fs
      - read file
      - write file
      - append file
      - delete file
      - rename file
      - create directory
      - remove directory
      - read directory
      - Streams
      - Buffers
    - path
    - events
      - event emitter
      - event listener
      - setTimeout
      - setInterval
      - setImmediate
    - process
      - process.nextTick
      - process.argv
      - process.env
      - process.exit
      - process.uptime
      - process.memoryUsage

- :package: npm (Node Package Manager)
  - NPM commands
  - Understanding package.json
    - Dependencies
    - DevDependencies
    - Scripts
  - Using npx
  - Global npm modules
  - Installing a Specific Version of a Package
  - Uninstalling a Package
  - Installing and using third-party (npm) modules

- *Bonus: [Creating and importing your own modules](https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module)*

<h2 id="async">:woman_juggling: Asynchronous Code</h2>

You might have already seen mentions of **Asynchronous Code** in the resources above. Now it is time to understand what it is and how it works.

As some of the more curious students might have already noticed, **JavaScript** is "single-threaded," meaning it usually does one thing at a time. More specifically, it has a single call stack, and it can execute one operation at a time.

But sometimes, we want it to handle many tasks without waiting for one to finish. For example, we might want to fetch data from a database, read a file from the file system, or send a request to an API. All of these operations take time, and we don"t want to wait for one to finish before starting the next one. That is where Asynchronous programming shines! It's like giving **JavaScript** a superpower to do many things at once.

In this section, we'll study **Asynchronous Coding** and learn how to utilize it for our purposes. We'll learn about the Event Loop, Callbacks, Promises, Async/Await, and how to handle errors in asynchronous code.

Ready to unlock the power of **Asynchronous Code**? Let's get started!

<h3 id="resources-async">:books: Resources</h3>

- [Introducing Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) from the MDN Web Docs. A great introduction to Asynchronous JavaScript.
- [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) from the MDN Web Docs. A great Promise tutorial.
- [Asynchronous JavaScript for Beginners](https://semaphoreci.com/blog/asynchronous-javascript) - A good introduction article about Asynchronous JavaScript.
- [Understanding Promises in JavaScript](https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f) - A good article about Promises.
- [Asynchronous JavaScript video tutorial](https://www.youtube.com/watch?v=ZYb_ZU8LNxs) - A great video tutorial for Asynchronous JavaScript.

★ *Again, you are not obliged to limit yourself to the resources provided above. Feel free to explore and search for more information*

<h3 id="topics-async">:clipboard: Topics</h3>

- :repeat: Event Loop
  - What is the Event Loop and how does it work?
  - Understanding the Call Stack
  - Understanding the Task Queue

- :leftwards_arrow_with_hook: Callbacks
  - Usage
  - Callback Hell
  - Error handling

- :crossed_fingers: Promises
  - Definition and usage
  - Replacing Callbacks with Promises
  - Promise chaining
  - Error handling with Promises
  - Methods
    - Promise.then
    - Promise.catch
    - Promise.finally
    - Promise.all
    - Promise.allSettled
    - Promise.race
  - Async/Await syntax

- :warning: Error Handling in Asynchronous Code
  - Understanding synchronous vs asynchronous error handling
  - Using try/catch with asynchronous code
  - Handling rejected Promises

- Asynchronous Code in Node.js
  - async fs methods - callbacks and promises
  - async http requests - callbacks and promises
  - util.promisify

<h2 id="tips-and-tricks">:bulb: Tips and Tricks</h2>

<h3 id="use-env-var">:pushpin: Use the env-var package to read environment variables</h3>

Environment variables are a great way to configure your application. They allow you to configure your application without changing the code. For example, you can use environment variables to configure the port your server is listening on, the database connection string, and more.

The [`env-var`](https://www.npmjs.com/package/env-var) package is a great package for reading environment variables. It allows you to set default values for environment variables, validate environment variables, and more.

<h3 id="use-eslint">:pushpin: Use ESLint to enforce code style</h3>

Imagine you're writing an essay for school, and you want to make sure your writing follows certain rules like proper grammar, punctuation, and sentence structure. ESLint is like a "grammar checker" for your JavaScript code. It helps you catch mistakes and adhere to coding guidelines so that your code is easy to understand, works correctly, and is easier to collaborate on with others. 📝✨

ESLint scans your JavaScript code and looks for patterns that might cause problems. It is highly configurable, so you can choose which rules you want to enable or disable. You can also create your own rules to enforce specific patterns that are unique to your team's codebase. It can find issues like:

🚫 **Syntax Errors**: These are basic mistakes like missing semicolons, mismatched parentheses, or typos that prevent your code from running correctly.

🎯 **Variable Scoping**: ESLint can detect when variables are used before they're defined, which can help you avoid unexpected behaviors.

🎠 **Unused Variables**: It points out when you've defined variables that you're not actually using in your code.

🎨 **Coding Style**: ESLint enforces coding standards, like how you format your code (indentation, spacing, etc.), to make your code consistent and more readable.

⭐ **Best Practices**: It can highlight common mistakes or practices that might lead to bugs or poor performance, like using <code>eval()</code>, which is generally discouraged (why? explore it 😃).

🧩 **Code Complexity**: ESLint can help you identify overly complex code that might be hard to understand and maintain.

So, how do we use ESLint?

ESLint is a tool that you run on your code to provide you with feedback. You can run it from the command line, but it's often more convenient to integrate it into your editor. Most editors have plugins that will run ESLint for you and highlight any issues it finds. You can also configure ESLint to automatically fix certain issues, like formatting errors, as you write your code.

To install ESLint, first install the eslint VSCode extension, then run the following command in your project folder:

```bash
npm install eslint eslint-plugin-prettier eslint-config-prettier --save-dev
```

Add a file named `.eslintrc` to your project folder. This file will contain the configuration for ESLint. Here you will choose which plugins and rules you want to use. Here is an example configuration file (also available in [`.eslintrc`](.eslintrc)):

```json
{
  "root": true,
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "settings": {
    "node": { "tryExtensions": [".js", ".json"] }
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    // add your custom rules here
    "no-console": "off" // for example, this will disable the no-console rule
  }
}
```

<h2 id="assignments">:dart: Assignments (NodeJS and Asynchronous Code)</h2>

<h3 id="assignment-1"> :dart: Assignment 1 - Build Your Own Synchronous CLI (Command Line Interface) Application</h3>

Your task is to build a CLI application that manages a simple "To-Do List". The application should be able to create, read, update, and delete (CRUD) tasks, as well as mark them as done or not done.

<h4 id="assignment-1-requirements">:book: Requirements</h4>

1. Initialize the [01_BuildYourOwnCLI](Assignments/01_BuildYourOwnCLI) folder as a Node.js project. (`npm init`)
2. Install necessary npm packages. You will need the `chalk`, `inquirer`, and `uuid` packages for this project.
3. Inside this folder you have the following files:
   - `index.js` - will be the entry point of your application.
   - `todo.js` - will contain the logic for managing the to-do list.
   - `storage.js` - will contain the logic for reading and writing data to the file system.
   - `utils.js` - will contain utility functions that you might need in your application.
4. When writing your code, use **synchronous** file system operations. You can use the `fs` package for this.

<h4 id="assignment-1-Instructions">:clipboard: Instructions</h4>

In `index.js`, write a function named `main`. This function should use the `inquirer` package to prompt the user for an action (e.g., create a task, view tasks, update a task, delete a task, mark a task as done, mark a task as not done, exit the application).

In `todo.js`, write the following functions:

- `createTask(title, description)`: Creates a new task with the given title and description. Each task should have a unique ID (use the `uuid` package to generate a unique ID) and a status (done or not done).
- `getTasks()`: Returns an array of all tasks.
- `getTask(id)`: Returns the task with the given ID.
- `updateTask(id, title, description)`: Updates the title and description of the task with the given ID.
- `deleteTask(id)`: Deletes the task with the given ID.
- `markTaskAsDone(id)`: Marks the task with the given ID as done.
- `markTaskAsNotDone(id)`: Marks the task with the given ID as not done.

In `storage.js`, write the following functions:

- `saveTasks(tasks)`: Saves the given array of tasks to a file named `tasks.json`.
- `loadTasks()`: Loads and returns an array of tasks from the `tasks.json` file.

In `utils.js`, write any utility functions that you might need. For example, you might want to write a function that validates user input, or a function that formats and colors the output (use the `chalk` package to color the output).

Add a script to your `package.json` file to start the application. The script should be named `todo-app` and should run the application.

<h4 id="assignment-1-resources">:books: Resources</h4>
For more information on the packages used in this project, visit their official documentation:

- [chalk](https://www.npmjs.com/package/chalk)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [uuid](https://www.npmjs.com/package/uuid)

<h4 id="assignment-1-bonus">:star: Bonus</h4>

For extra credit, add additional features to your task manager:

- Priorities for tasks
- Due dates for tasks
- A command to show only the tasks that are due today
- A command to show only the tasks that are done
- A command to show only the tasks that are not done

After receiving approval from one of your commanders, you can proceed to the [next part](#assignment-2).

<h3 id="assignment-2">:dart: Assignment 2 - Refactor Your CLI Application to Work Asynchronously</h3>

Now rewrite your application to use asynchronous code. This means that all file system operations should be non-blocking, and you should use Promises or Async/Await to handle asynchronous operations.

Place your code in the [`02_RefactorToAsync`](Assignments/02_RefactorYourCLI) folder.

★ *IMPORTANT! Copy the content from [`01_BuildYourOwnCLI`](Assignments/01_BuildYourOwnCLI) you already have to the [`02_RefactorToAsync`](Assignments/02_RefactorYourCLI). modify the code there and keep the `todo-cli` without changes.*

<h4 id="assignment-2-requirements">:book: Requirements</h4>

1. Refactor the `saveTasks` and `loadTasks` functions in `storage.js` to use asynchronous file system operations.
2. Refactor the `main` function in `index.js` to use Promises or Async/Await.
3. Handle any errors that might occur during asynchronous operations. This includes handling rejected Promises and catching exceptions thrown by Async/Await.

<h3 id="assignment-3">:dart: Assignment 3 - Refactor a Library Booking System</h3>

Refactor the provided callback-based asynchronous code to use the `async/await` pattern with Promises.
Place your code in the [`03_LibraryBookingSystem/refactoredCode.js`](Assignments/03_LibraryBookingSystem/refactoredCode.js) file.

**Unrefactored Code:** (also available in the [03_LibraryBookingSystem](Assignments/03_LibraryBookingSystem/unrefactoredCode.js) folder)

```javascript
const readers = [
    { name: "Viki Ezra", isPremium: true, email: "vikiezra@email.com" },
    { name: "Yossi Levi", isPremium: false, email: "YossiL@email.com" },
    { name: "Nani Dufesh", isPremium: true, email: "DufiDufi@email.com" },
];

const recommendedBooks = [
    ["The Alchemist", "The Prophet"],
    ["Omelette Bread", "Heroes Of Israel 24"],
    ["The Little Prince", "How to write good course assignments"],
];

const getReader = (id, callback) => {
    setTimeout(() => {
        callback(readers[id]);
    }, 3000);
};

function getRecommendedBooks(id, callback) {
    setTimeout(() => {
        callback(recommendedBooks[id]);
    }, 4000);
}

function reserveBooks(email, books, callback) {
    console.log(`Reserving books ${books} for ${email}...`);
    setTimeout(() => {
        callback();
    }, 2000);
}

const main = (id) => {
    getReader(id, (reader) => {
        console.log("Reader: ", reader);
        if (reader.isPremium) {
            getRecommendedBooks(id, (books) => {
                console.log("Recommended books: ", books);
                reserveBooks(reader.email, books, () => {
                    console.log("Books reserved...");
                });
            });
        }
    });
};
```

<h3 id="assignment-4">:dart: Assignment 4 - Exploring Promises</h3>

Implement the following functions using Promises. Place your code in the [`04_ExploringPromises/index.js`](Assignments/04_ExploringPromises/index.js) file.

1. Create the following `delayedResolution` and `delayedRejection` functions:

    - `delayedResolution(ms)`: Returns a promise which resolves after a given time (in milliseconds). The promise resolves with a message `"Resolved after [x] milliseconds"`.
    - `delayedRejection(ms)`: Returns a promise which rejects after a given time (in milliseconds). The promise rejects with an error message `"Rejected after [x] milliseconds"`.
    - Make sure to test the next assignment functions using `delayedResolution` and `delayedRejection`.

2. Error Handling:

    - Write two functions named `handlePromises1(promise1)` and `handlePromises2(promise1)`.
    - If the promise is resolved, the function should return the message it resolved with.
    - If the promise is rejected, the function should return the error message it rejected with prefixed by the word `ERROR:`.
    - The difference between the two functions is that `handlePromises1()` should use the `then()` and `catch()` approach while `handlePromises2()` should use the `async/await` approach.

3. Racing Promises:

    - Write a function named `racePromises(ms1, ms2)`.
    - The function will create two promises using the `delayedResolution` and `delayedRejection` functions.
    - Each promise will be given the corresponding `ms` value.
    - The function should return the message of the fastest promise (the one that resolved or rejected first).
    - The result of the slower promise should be ignored.

4. Handling Multiple Promises:

    - Write a function named `handleMultiplePromises(promisesArr)`.
    - The function will receive an array of promises.
    - The function should wait for all promises to resolve or reject.
    - After all promises have settled, the function should return an object with the following properties:
      - `resolved`: Number of promises that resolved.
      - `rejected`: Number of promises that rejected.

5. Handling multiple resolutions:

    - Write a function named `handleMultipleResolutions(promisesArr)`.
    - The function will receive an array of promises.
    - The function should wait for all promises to resolve.
    - If one of the promises rejects, immediately the function should return an error message `At least one promise rejected`.
    - If all promises resolve, the function should return a success message `All promises resolved`.

*:grey_question: Some questions to think about: Where do we meet each of the above scenarios in real life? Where will we meet them in our code?*

<h3 id="assignment-5">:dart: ★ Assignment 5 (Bonus) - Joke Generator Script</h3>

For this assignment, you'll be building a Node.js script that generates jokes using the [`one-liner-jokes`](https://www.npmjs.com/package/one-liner-joke) package.

<h4 id="assignment-5-Instructions">:clipboard: Instructions</h4>

1. Initialize the [05_JokeGenerator](Assignments/05_JokeGenerator) folder as a Node.js project. (`npm init`)
2. Install the necessary npm packages. You will need the `env-var` , `dotenv`, [`one-liner-jokes`](https://www.npmjs.com/package/one-liner-joke), and `fs` packages for this project.
3. The [`.env`](Assignments/05_JokeGenerator/.env) file will contain environment variables:
   - `JOKE_AMOUNT`: The number of jokes to generate.
   - `JOKE_CATEGORIES`: A comma-separated list of joke categories to generate jokes from.
   - E.g.

      ```env
      JOKE_AMOUNT=50
      JOKE_CATEGORIES=general,programming,knock-knock
      ```

4. The [`index.js`](Assignments/05_JokeGenerator/index.js) file will be the entry point of your application. Inside it implement the following functions:
    - `getConfig()` - This function should read the environment variables from the `.env` file and return them as an object.
    - `getJokes(amount, categories)` - This function should use the `one-liner-jokes` package to generate jokes. The returned jokes must be unique (no joke should appear twice).
    - `writeJokesToFile(jokes)` - This function should take the jokes returned by `getJokes` and write them to a file named `jokes.txt`. Only the content of the jokes will appear line by line in the file.

<h4 id="assignment-5-resources">:books: Resources</h4>
For more information on the packages used in this project, visit their official documentation:

- [env-var](https://www.npmjs.com/package/env-var)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [one-liner-jokes](https://www.npmjs.com/package/one-liner-joke)
- [fs](https://nodejs.org/api/fs.html)
