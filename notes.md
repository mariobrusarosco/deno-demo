## Install

> Shell (Mac, Linux):

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

## Adding to Bash Profile or Bash RC

```bash
nano ~/.bashrc
```

And paste:

```bash
export DENO_INSTALL="/home/mario/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

Then run:

```bash
source ~/.bashrc
```

## Running Deno

```bash
deno run myfile.ts
```

## Reading Files

#### With Explicit Decode Process

```ts
const rawContent = await Deno.readFile("hello-world.txt");
const fileContent = textDecoder.decode(rawContent);

console.log(fileContent);
```

> `await` is on 'Top Level' so you're not obligated to use`async` first

But this will generate an error of File Permission

### Files Permissions

```bash
deno run --allow-read --allow-write myfile.ts
```

## Decoding Files

```ts
const ded;
const fileContent = await Deno.readFile("hello-world.txt");
```

#### Without Explicit Decode Process

```ts
const helloWorld = await Deno.readTextFile(filePath);
```

### Writing Files

```ts
const textEncoder = new TextEncoder();
const filePath = "assets/hello-world.txt";

const contentToAppend = textEncoder.encode(
  "This sentence was written via Deno File System"
);
await Deno.writeFile(filePath, contentToAppend);
```

deno run --allow-read myfile.ts

```ts
```

### Renaming and removing Files

```ts
await Deno.rename(filePath2, "assets/renamed.txt");
await Deno.remove("assets/renamed.txt");
```

## Fetching Files

By default we can not make networks requests. Too run it:

```bash
deno run --allow-net fetching.ts
```

Then:

```ts
const response: Response = await fetch("https://swapi.dev/api/films");

const data = await response.json();

console.log({ data });
```

## Standard Library

Packages with commom features, maintained by Deno.

These packages will be downloaded and cached for you.

```ts
import { v4 } from "https://deno.land/std/uuid/mod.ts";
```

You can see this module dowload at the first time you ran the file where this `import` is located.

### Unstable Packages

Some packages will throw errors because they're unstable. use `--unstable` flag to use them.

## fs Module

```ts
const breakingBad = await readJson("assets/fs-example.json");
console.log({ breakingBad });

const json = [
  {
    name: "Walter White",
    age: "50",
  },
  {
    name: "Jesse Pinkman",
    age: "26",
  },
  {
    name: "Tuco",
    age: "32",
  },
];

const breakingBad2 = await writeJson("assets/written-fs-example.json", json, {
  spaces: 2,
});
```

## Creating a server

```ts
```
