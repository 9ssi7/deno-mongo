import { AppVariables } from "./config/variables.enum.ts";
import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getRequiredEnv } from "./utils/env.ts";
import { useBlogRouter } from "./domains/blog/blog.router.ts";

export const createRouter = () => {
  const router = new Router();

  useBlogRouter(router);

  return {
    routes: router.routes(),
    allowedMethods: router.allowedMethods(),
    port: getRequiredEnv<number>(AppVariables.SERVER_PORT),
  };
};
