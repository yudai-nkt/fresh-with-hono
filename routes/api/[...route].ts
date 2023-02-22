import { type Handler } from "$fresh/server.ts";
import { hc, Hono } from "hono";

const api = new Hono().get(
  "/todo",
  (c) =>
    c.jsonT([
      { title: "Visit a dinosaur museum. 🦕", done: true },
      { title: "Buy a lemon. 🍋", done: true },
      { title: "Enjoy campfire. 🔥", done: false },
    ]),
);

const handle = (subApp: Hono, path = "/"): Handler => (req) =>
  new Hono().route(path, subApp).fetch(req);
const app = new Hono().route("/api", api);

export const handler = handle(app);
export const client = hc<typeof app>;
