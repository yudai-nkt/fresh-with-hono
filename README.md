# Fresh with Hono

PoC project of Hono adapter for Deno's Fresh.

## Available endpoints

- GET [`/api/hello`](https://fresh-with-hono.deno.dev/api/hello)
- GET `/api/greeting/:name` (e.g.,
  [`/api/greeting/Alice`](https://fresh-with-hono.deno.dev/api/greeting/Alice))

## Development

Launch a dev server with:

```
deno task dev
```

## ToDo

- [ ] Consider the necessity of supporting custom URL pattern described
      [here](https://fresh.deno.dev/docs/concepts/routing).
  - The answer is probably "No" because Hono should handle all the job about
    routing.

## License

MIT
