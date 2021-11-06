import { NextFunction, Request, Response } from "express";
import { ResponseObj } from "./../helpers/response";
import { UserModel } from "./../models/userModel";
import * as bcrypt from "bcrypt-nodejs";
import * as jwt from "jsonwebtoken";

export class UserServices {
  public async register(req: Request, res: ResponseObj) {
    const { email, name, lastName, password, rol } = req.body;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const userDb = new UserModel({
      email: email,
      name: name,
      lastName: lastName,
      rol: rol,
      password: hashedPassword,
    });

    userDb.save((err, data) => {
      if (err) {
        let errorm = err.message;
        res.setError(true);
        if (errorm.includes("email_1 dup")) {
          res.setMessage("Email ya registrado");
        } else if (errorm.includes("required")) {
          res.setMessage("Parametros invalidos");
        } else {
          res.setMessage(errorm);
        }
        return;
      }
    });
  }

  public async login(req: Request, res: ResponseObj) {
    const { email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    UserModel.findOne({ email: email }, (err: any, data: any) => {
      if (err) {
        res.setError(true);
        res.setMessage(err);
        return;
      }

      if (!data) {
        res.setError(true);
        res.setMessage("Email o correo invalido");
        return;
      }
      const isValid = bcrypt.compareSync(password, data.password);
      if (isValid) {
        const jwtToken = jwt.sign(
          { id: data._id, name: data.name, rol: data.rol },
          "123456"
        );
        res.setData({
          token: jwtToken,
        });
        console.log(res);
      } else {
        res.setError(true);
        res.setMessage("Email o correo invalido");
      }
    });
  }

  public async assignRole(req: Request, res: ResponseObj) {}
}
