import mongoose from "mongoose";
const db = mongoose.connection;
//let uriLcocal = 'mongodb://localhost:27017/warehousemanagement'; PARA TRABAJAR EN LOCAL
const mongoConnection = `mongodb+srv://usertest:`; //PARA TRABAJAR EN PRODUCCIÓN

mongoose.connect(mongoConnection, {});

db.on("error", (err) => console.log(new Error(err)));
db.once("open", () => console.log("mongodb server connected!"));
