import { Head } from "$fresh/runtime.ts";

export default () => {
  return (
    <>
      <Head>
        <title>Fresh with Hono</title>
      </Head>
      <div>
        Available API endpoints are the following:
        <ul>
          <li>GET <a href="/api/hello">/api/hello</a></li>
          <li>GET /api/greeting/:name (e.g., <a href="/api/greeting/Alice">/api/greeting/Alice</a>)</li>
        </ul>
      </div>
    </>
  );
}
