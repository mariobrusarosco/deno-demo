import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import { Book } from "../models/books.ts";

let books: Book[] = [
  { id: "1324", title: "Book 1", author: "Author 1", pages: 300 },
  { id: "5945", title: "Book 2", author: "Author 3", pages: 345 },
  { id: "5857", title: "Book 3", author: "Author 1", pages: 234 },
];

export const get_all_books = async (context: Context) => {
  context.json(books, 200);
};

// app.get("/books:id", async (context: Context) => {
// });

// app.post("/books", async (context: Context) => {
// });

// app.delete("/books:id", async (context: Context) => {
// });
