import { AppVariables } from "./config/variables.enum.ts";
import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getRequiredEnv } from "./utils/env.ts";

export const createRouter = () => {
  const router = new Router();

  router.get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  });

  return {
    routes: router.routes,
    allowedMethods: router.allowedMethods,
    port: getRequiredEnv<number>(AppVariables.SERVER_PORT),
  };
};

/**
 * router.get("/blogs", async (ctx) => {
  const data = await blogs.find({}).toArray();
  ctx.response.body = JSON.stringify(data, null, 2);
  ctx.response.type = "application/json";
});

router.get("/blogs/:id", async (ctx) => {
  console.log("ctx.params.id", ctx.params.id);

  const data = await blogs.findOne({ _id: new ObjectId(ctx.params.id) });
  ctx.response.body = JSON.stringify(data, null, 2);
  ctx.response.type = "application/json";
});

router.post("/blogs", async (ctx) => {
  const data = await ctx.request.body().value;
  const { title, body } = data;
  const blog = await blogs.insertOne({ title, body });
  ctx.response.body = JSON.stringify(blog);
  ctx.response.type = "application/json";
});
 */
