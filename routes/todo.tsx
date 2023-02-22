import { Head } from "$fresh/runtime.ts";
import { Handlers, type PageProps } from "$fresh/server.ts";
import { hc, type InferResponseType } from "hono";
import { app } from "./api/[...route].ts";

const client = hc<typeof app>("/");
type ToDoList = InferResponseType<typeof client.api.todo.$get>;

export const handler: Handlers<ToDoList> = {
  GET: async (req, ctx) => {
    const { origin } = new URL(req.url);
    const { api } = hc<typeof app>(origin);
    const todo = await api.todo.$get().then((r) => r.json());
    return ctx.render(todo);
  },
};

export default (
  { data }: PageProps<ToDoList>,
) => (
  <>
    <Head>
      <title>ToDo List | Fresh with Hono</title>
    </Head>
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ title, done }) => (
            <tr>
              <td>{title}</td>
              <td>
                {done ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);
