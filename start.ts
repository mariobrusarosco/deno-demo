const me = "mario";

const getName = (name: string): string => name;

const user = getName(me);

console.log(user);

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder("utf-8");

const filePath = "assets/hello-world.txt";

const contentToAppend = textEncoder.encode(
  "This sentence was written via Deno File System",
);
await Deno.writeFile(filePath, contentToAppend);

const fileContent = await Deno.readFile(filePath);
const helloWorld = textDecoder.decode(fileContent);

console.log(helloWorld);
