import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { useBlogService } from "./blog.service.ts";

export const useBlogRouter = (router: Router) => {
  const blogService = useBlogService();

  router.get("/blogs", async (ctx) => {
    const data = await blogService.list();
    ctx.response.body = JSON.stringify(data, null, 2);
    ctx.response.type = "application/json";
  });

  router.get("/blogs/:id", async (ctx) => {
    console.log("ctx.params.id", ctx.params.id);

    const data = await blogService.detail(ctx.params.id);
    ctx.response.body = JSON.stringify(data, null, 2);
    ctx.response.type = "application/json";
  });

  router.post("/blogs", async (ctx) => {
    const data = await ctx.request.body().value;
    const { title, body } = data;
    const blog = await blogService.create({ title, body });
    ctx.response.body = JSON.stringify(blog);
    ctx.response.type = "application/json";
  });
};
