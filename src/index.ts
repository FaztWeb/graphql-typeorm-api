import "reflect-metadata";
import { connect } from "./config/typeorm";
import { startServer } from "./app";

async function main() {
  connect();
  const app = await startServer();
  app.listen(3000);
  console.log("Server on port 3000");
}

main();
