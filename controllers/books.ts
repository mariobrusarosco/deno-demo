import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import { Book } from "../models/books.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
  { id: "1324", title: "Book 1", author: "Author 1", pages: 300 },
  { id: "5945", title: "Book 2", author: "Author 3", pages: 345 },
  { id: "5857", title: "Book 3", author: "Author 1", pages: 234 },
];

export const get_all_books = (context: Context) => {
  context.json(books, 200);
};

export const get_book = (context: Context) => {
  const { id } = context.params;
  const book = books.find((book: Book) => book.id === id);

  if (book) {
    return context.json(book, 200);
  }

  return context.string("no book with that id", 404);
};

export const create_book = async (context: Context) => {
  const id = v4.generate();
  const { author, title, pages } = await context.body();
  const book = { id, author, title, pages };

  books.push(book);

  console.log({ book });
  return context.json(book, 201);
};

export const delete_book = (context: Context) => {
  const { id } = context.params;
  const book = books.find((book: Book) => book.id === id);

  if (book) {
    books = books.filter((book: Book) => book.id !== id);
    return context.json(book, 200);
  }

  return context.string("no book with that id", 404);
};
