import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import {
  get_book,
  create_book,
  delete_book,
  get_all_books,
} from "./controllers/books.ts";

const PORT = 3000;
const app = new Application();

// Static
app.static("/", "./public");

// Routing
app.get("/", async (context: Context) => {
  await context.file("./public/served-html-example.html");
});

app.get("/books", get_all_books)
  .get("/books:id", get_book)
  .post("/books", create_book)
  .delete("/books:id", delete_book);

app.start({ port: PORT });
