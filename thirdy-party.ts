import {
  camelCase,
  paramCase,
  pathCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = "Hello world!";

console.log(camelCase(text));
console.log(paramCase(text));
console.log(snakeCase(text));
console.log(pathCase(text));
