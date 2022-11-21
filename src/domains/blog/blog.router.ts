import { failure, success, successWithData } from "../../utils/response.ts";

import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { setJsonBody } from "../../utils/router-context.ts";
import { useBlogService } from "./blog.service.ts";

export const useBlogRouter = (router: Router) => {
  const blogService = useBlogService();

  router.get("/blogs", async (ctx) => {
    const list = await blogService.list();
    setJsonBody(ctx, successWithData(list, "Blog list successfully fetched"));
  });

  router.get("/blogs/:id", async (ctx) => {
    const data = await blogService.detail(ctx.params.id);
    const result = data
      ? successWithData(data, "Blog detail successfully fetched")
      : failure("Blog not found");
    setJsonBody(ctx, result);
  });

  router.post("/blogs", async (ctx) => {
    const data = await ctx.request.body().value;
    const { title, body } = data;
    const blog = await blogService.create({ title, body });
    const result = blog
      ? success("Blog created successfully")
      : failure("Blog not created");
    setJsonBody(ctx, result);
  });
};
