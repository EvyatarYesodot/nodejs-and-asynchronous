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


const getReader = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(readers[id])
        }, 3000);
    })
};

const getRecommendedBooks = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(recommendedBooks[id])
        }, 4000);
    })
}

const reserveBooks = (email, books) => {
    console.log(`Reserving books ${books} for ${email}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}

const main = async (id) => {
    const reader = await getReader(id)
    console.log("Reader: ", reader);
    if (reader.isPremium) {
        const books = await getRecommendedBooks(id)
        console.log("Recommended books: ", books);

        await reserveBooks(reader.email, books)
        console.log("Books reserved...");
    }
};

main(0);

export { getReader, getRecommendedBooks, main, reserveBooks };
