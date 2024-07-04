import { envs } from "./config";
import { Routes } from "./presentation/routes";
import { Server } from "./presentation/server";


(()=>{
  main();
})();


async function main() {
  const routes = Routes.Router;
  const server = new Server({
    port: envs.port,
    routes,
  });


  server.start();
};