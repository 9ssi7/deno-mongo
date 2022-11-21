import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import {
  MongoClient,
  ObjectId,
} from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const app = new Application();
const mongo = new MongoClient();
const router = new Router();

const getRequiredEnv = <T>(key: string): T => {
  const value = Deno.env.get(key);
  if (!value) {
    throw new Error(`${key} is required`);
  }
  return value as T;
};

const MONGO_URI = getRequiredEnv<string>("MONGO_URI");
const MONGO_DB = getRequiredEnv<string>("MONGO_DB");
const PORT = getRequiredEnv<number>("PORT");

console.log("Connecting to database...", MONGO_URI);
await mongo.connect(MONGO_URI);

const db = mongo.database(MONGO_DB);
const blogs = db.collection("blogs");

router.get("/blogs", async (ctx) => {
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

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Listening at http://localhost:" + PORT);
await app.listen({ port: PORT });
