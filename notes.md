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

```ts
const fileContent = await Deno.readFile("hello-world.txt");
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

> `await` is on 'Top Level' so you're not obligated to use`async` first

But this will generate an error of File Permission

### Files Permissions

```bash
deno run --allow-read myfile.ts
```
