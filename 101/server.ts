import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 3000;
const server = serve({ port: PORT });

console.log(`Listening at ${PORT}`);

for await (const req of server) {
  console.log(req.url);

  req.respond({
    body: "Basic Request!",
  });
}
