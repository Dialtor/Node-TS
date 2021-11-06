import express from "express";
import { Routes } from "./routes/routes";
import { UserRoute } from "./routes/userRoute";
import * as bodyParser from "body-parser";
import "./config/connection";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routing();
  }

  //Config Routes
  private routeDefault: Routes = new Routes();
  private UserRoutes: UserRoute = new UserRoute();

  //Configuration routing
  routing() {
    this.routeDefault.routes(this.app);
    this.UserRoutes.routes(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
  }
}
export default new App().app;
