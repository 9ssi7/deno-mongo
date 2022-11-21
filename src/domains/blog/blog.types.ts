import type { ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

export type BlogSchema = {
  title: string;
  body: string;
};

export type Blog = BlogSchema & {
  _id: ObjectId;
};
