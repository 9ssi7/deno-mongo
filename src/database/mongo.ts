import { AppVariables } from "../config/variables.enum.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { getRequiredEnv } from "../utils/env.ts";

const uri = getRequiredEnv<string>(AppVariables.MONGO_URI);
const db = getRequiredEnv<string>(AppVariables.MONGO_DB);

const mongo = new MongoClient();

export const connect = () => {
  console.log("Connecting to database...");
  return mongo.connect(uri);
};
export const useDatabase = () => mongo.database(db);
