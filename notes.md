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

```bash
$ deno run --allow-net server.ts
```

```ts
import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 3000;
const server = serve({ port: PORT });

console.log(`Listening at ${PORT}`);

for await (const req of server) {
  console.log({ req });

  req.respond({
    body: "Basic Request",
  });
}
```

## Thirdy Party Modules

```bash
$ deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@2.3.0/denon.ts


denon run --allow-net server.ts
```

#### Case Module

```ts
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
```

## Watch mode

```bash
$ denon run --allow-net server.ts
```

Denon wrapper deno, so you can still call and pass arguments the same way you would do usind `deno`

### API

```ts
import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";

const PORT = 3000;
const app = new Application();

// Routing
app.get("/", async (context: Context) => {
  await context.file("./public/served-html-example.html");
});

app.start({ port: PORT });
```

> Obs. app.get() returns the `app` so you can chain methods like:

```ts
app.get("/", ...)
  .get("/test", ...)
  .get("...")
```

### Static Files

By default Deno + abc do not serve static files

```ts
import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";

const PORT = 3000;
const app = new Application();

// Static
app.static("/", "./public");

app.start({ port: PORT });
```
