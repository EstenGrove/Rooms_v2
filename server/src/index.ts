import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { API_USER } from "./utils/utils_env";

const app = new Hono();
const port = 3000;

// middleware
app.use(logger());
app.use(cors());
app.use(basicAuth(API_USER));

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
