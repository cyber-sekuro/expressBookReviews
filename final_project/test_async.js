const {
  getAllBooksAsync,
  getBookByISBNAsync,
  getBooksByAuthorAsync,
  getBooksByTitleAsync
} = require("./router/general.js");

async function testAsyncFunctions() {
  try {
    console.log("\n=== Test 1: All Books ===");
    const allBooks = await getAllBooksAsync();
    console.log("Total books:", Object.keys(allBooks).length);

    console.log("\n=== Test 2: Book by ISBN ===");
    const isbnResult = await getBookByISBNAsync("8");
    console.log(JSON.stringify(isbnResult, null, 2));

    console.log("\n=== Test 3: Books by Author ===");
    const authorResult = await getBooksByAuthorAsync("Jane Austen");
    console.log(JSON.stringify(authorResult, null, 2));

    console.log("\n=== Test 4: Books by Title ===");
    const titleResult = await getBooksByTitleAsync("Pride and Prejudice");
    console.log(JSON.stringify(titleResult, null, 2));

    console.log("\nAll four asynchronous tests passed.");
  } catch (error) {
    console.error("Asynchronous test failed:", error.message);
    process.exitCode = 1;
  }
}

testAsyncFunctions();