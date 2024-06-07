import { rest } from "msw";


export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "Joe Doe" },
        { id: 4, name: "Jack Doe" },
      ])
    );
  }),
];
