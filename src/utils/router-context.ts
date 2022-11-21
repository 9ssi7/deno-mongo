import { RouterContext } from "https://deno.land/x/oak@v11.1.0/router.ts";

export const setJsonBody = <D = unknown>(
  ctx: RouterContext<any, any, any>,
  data: D
) => {
  ctx.response.body = JSON.stringify(data, null, 2);
  ctx.response.type = "application/json";
};
