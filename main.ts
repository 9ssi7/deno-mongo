import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { connect } from "./src/database/mongo.ts";
import { createRouter } from "./src/main.router.ts";

const app = new Application();

await connect();

const { routes, allowedMethods, port } = createRouter();

app.use(routes);
app.use(allowedMethods);

console.log("Listening at http://localhost:" + port);
await app.listen({ port: port });
