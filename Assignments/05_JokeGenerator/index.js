import { config } from "dotenv";
import env from "env-var";
import oneLinerJoke from "one-liner-joke";
import fs from "fs/promises";

config();

const getConfig = () => {
    return {
        jokeAmount: env.get("JOKE_AMOUNT").required().asIntPositive(),
        jokeCategories: env.get("JOKE_CATEGORIES").required().asArray(),
    };
};

const getJokes = (amount, categories) => {
    const jokes = new Set();
    let attempts = 0;
    while (jokes.size < amount && attempts < amount * 10) {
        attempts++;
        const randomTag = categories[Math.floor(Math.random() * categories.length)];
        const randomJoke = oneLinerJoke.getRandomJokeWithTag(randomTag);
        if (randomJoke.body) {
            jokes.add(randomJoke.body);
        }
    }
    if (jokes.size === 0) {
        console.log("not found jokes");
        return;
    }
    return Array.from(jokes);
};

const writeJokesToFile = async (jokes) => {
    if (!jokes) {
        console.log("jokes is empty");
        return;
    }
    try {
        await fs.writeFile("jokes.txt", jokes.join("\n"), "utf-8");
        console.log("File saved successfully");
    } catch (err) {
        console.log(`Error: error writing to file`, err);
    }
};

const main = async () => {
    const data = getConfig();
    const jokes = getJokes(data.jokeAmount, data.jokeCategories);
    writeJokesToFile(jokes);
};

main();

export { getConfig, getJokes, writeJokesToFile };
