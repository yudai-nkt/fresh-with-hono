import { type Handler } from "$fresh/server.ts";
import { Hono } from "hono";

const api = new Hono()
  .get(
    "/hello",
    (c) => c.jsonT({ message: "Hello world!" }),
  )
  .get(
    "/greeting/:name",
    (c) => {
      const { name } = c.req.param();
      return c.jsonT({ to: name, greeting: `Hi ${name}, how's it going?` });
    },
  );

const handle = (subApp: Hono, path = "/"): Handler => (req) =>
  new Hono().route(path, subApp).fetch(req);

export const app = new Hono().route("/api", api);
export const handler = handle(app);
