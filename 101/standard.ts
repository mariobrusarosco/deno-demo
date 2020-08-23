import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const uid = v4.generate();
console.log({ uid });

// Reading JSON

const breakingBad = await readJson("assets/fs-example.json");
console.log({ breakingBad });

const json = [
  {
    "name": "Walter White",
    "age": "50",
  },
  {
    "name": "Jesse Pinkman",
    "age": "26",
  },
  {
    "name": "Tuco",
    "age": "32",
  },
];

// Writing JSON
const breakingBad2 = await writeJson(
  "assets/written-fs-example.json",
  json,
  { spaces: 2 },
);
