import { WebSocket } from "https://deno.land/std@0.64.0/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

const chatConnection = async (ws: WebSocket) => {
  const id = v4.generate();

  sockets.set(id, ws);

  console.log(sockets);
};

export { chatConnection };
