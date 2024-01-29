import mongoose from "mongoose";
import config from "./config";

(async() => {

   try{

    const db = await mongoose.connect(`${config.DB_URI}`);
    console.log("connectado a la base de datos: " + db.Collection.name)

   }catch{
    console.log("Error conectando a la db")
   }
    
})()