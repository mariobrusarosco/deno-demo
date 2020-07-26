const me = "mario";

const getName = (name: string): string => name;

const user = getName(me);

console.log(user);

// Reading Files
const filePath = "assets/reading.txt";
// const decoder = new TextDecoder("utf-8");
// const fileContent = await Deno.readFile(filePath);
// const helloWorld = decoder.decode(fileContent);

const helloWorld = await Deno.readTextFile(filePath);

// console.log(helloWorld);

// Writing Files
const filePath2 = "assets/writing.txt";
const encoder = new TextEncoder();

// const contentToAppend = encoder.encode(
//   "This sentence was written via Deno File System",
// );
// await Deno.writeFile(filePath2, contentToAppend);
// const writtenFile = await Deno.readFile(filePath2).then((data) =>
//   decoder.decode(data)
// );
// console.log(writtenFile);

// Renaming and removing Files
await Deno.rename(filePath2, "assets/renamed.txt");
await Deno.remove("assets/renamed.txt");
