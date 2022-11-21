import { BlogSchema } from "./blog.types.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { useDatabase } from "../../database/mongo.ts";

export const useBlogService = () => {
  const blogCollection = useDatabase().collection<BlogSchema>("blogs");

  const list = (): Promise<BlogSchema[]> => {
    return blogCollection.find({}).toArray();
  };

  const detail = (id: string): Promise<BlogSchema | undefined> => {
    return blogCollection.findOne({ _id: new ObjectId(id) });
  };

  const create = async (blog: BlogSchema): Promise<boolean> => {
    const result = await blogCollection.insertOne(blog);
    return !!result;
  };

  return {
    list,
    detail,
    create,
  };
};
