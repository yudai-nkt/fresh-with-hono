import { Head } from "$fresh/runtime.ts";

export default () => {
  return (
    <>
      <Head>
        <title>Fresh with Hono</title>
      </Head>
      <div>
        Available endpoints are the following:
        <ul>
          <li>
            JSON API: <a href="/api/todo">/api/todo</a>
          </li>
          <li>
            Frontend UI: <a href="/todo">/todo</a>
          </li>
        </ul>
      </div>
    </>
  );
};
