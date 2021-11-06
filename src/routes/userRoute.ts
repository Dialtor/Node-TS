import { UserController } from "./../controllers/userController";

export class UserRoute {
  private userController: UserController = new UserController();

  public routes(app: any): void {
    //Route user to Auth - by Jwt
    app.route("/api/user/register").post(this.userController.registerUser);
    app.route("/api/user/login").post(this.userController.loginUser);
    app.route("/api/user/assignrole").post(this.userController.assignRoleUser);
  }
}
