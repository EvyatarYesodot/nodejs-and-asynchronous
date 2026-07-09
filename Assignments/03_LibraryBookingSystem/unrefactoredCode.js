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

main(0);

// Make sure to export your function in the refactored file as well!
export { getReader, getRecommendedBooks, main, reserveBooks };
