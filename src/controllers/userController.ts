import { ResponseObj } from "./../helpers/response";
import { UserServices } from "./../services/userServices";
import { NextFunction, Request, Response } from "express";

const services = new UserServices();

export class UserController {
  public async registerUser(req: Request, res: Response) {
    let responseObj = new ResponseObj();

    try {
      await services.register(req, responseObj);
      res.json(responseObj);
    } catch (err: any) {
      responseObj.setStatus(500);
      responseObj.setMessage(err);
      res.json(responseObj);
    }
  }

  public async loginUser(req: Request, res: Response) {
    let responseObj = new ResponseObj();

    try {
      await services.login(req, responseObj);
      console.log(responseObj);
      res.json(responseObj);
    } catch (err: any) {
      responseObj.setStatus(500);
      responseObj.setMessage(err);
      res.json(responseObj);
    }
  }

  public async assignRoleUser(req: Request, res: Response) {
    let responseObj = new ResponseObj();

    try {
      await services.assignRole(req, responseObj);
      res.json(responseObj);
    } catch (err: any) {
      responseObj.setStatus(500);
      responseObj.setMessage(err);
      res.json(responseObj);
    }
  }
}
