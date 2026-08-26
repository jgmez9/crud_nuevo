import express from "express"
import "dotenv/config"
import "../associations/association.js"
import db from "../config/db.js"




const app = express();




app.use(express.json());



try {
  await db.authenticate();
  console.log(" Base de datos conectada");

  await db.sync();
  console.log("Tablas sincronizadas");
} catch (error) {
  console.error(" Error:", error);
}

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
