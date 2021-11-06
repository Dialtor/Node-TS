import { Schema, Document, Model, model, Error } from "mongoose";

export interface IUser extends Document {
  name: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
  rol: string;
}

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "Ingrese un nombre",
    },
    lastName: {
      type: String,
      required: "Ingrese un apellido",
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      required: "Ingrese una contraseña",
    },
    active: {
      type: Boolean,
      default: true,
    },
    rol: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export const UserModel: Model<IUser> = model<IUser>("User", UserSchema);
