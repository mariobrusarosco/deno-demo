import { serve } from "https://deno.land/std@0.64.0/http/server.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  WebSocket,
  acceptable,
} from "https://deno.land/std@0.64.0/ws/mod.ts";

import { chatConnection } from "./ws/chatroom.ts";

const PORT = 3000;
const server = serve({ port: PORT });

console.log(`Running on ${PORT}`);

for await (const req of server) {
  if (req.url === "/") {
    req.respond({
      status: 200,
      body: await Deno.open("./public/index.html"),
    });
  }

  if (req.url === "/ws") {
    if (acceptable(req)) {
      const { conn, r: bufReader, w: bufWriter, headers } = req;

      acceptWebSocket({
        conn,
        bufReader,
        bufWriter,
        headers,
      })
        .then(chatConnection);
    }
  }
}
