import { WebSocket, isWebSocketCloseEvent  } from "https://deno.land/std@0.64.0/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

interface Brodcast {
  name: string;
  message: string;
}


const brodcastEvent = (brodcast: Brodcast) => {
  sockets.forEach((ws: WebSocket) => {
    ws.send(JSON.stringify(brodcast))
  })
}

const chatConnection = async (ws: WebSocket) => {
  const id = v4.generate();
  sockets.set(id, ws);

  for await (const event of ws) {
    if(isWebSocketCloseEvent(event)) {
      sockets.delete(id)
    }

    const parsedEvent = typeof event === 'string' ? JSON.parse(event): event;

    brodcastEvent(parsedEvent)
  }
};

export { chatConnection };
