//creamos la conexion a la base de datos

import { Sequelize } from "sequelize";
import "dotenv/config"    

console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "CARGADA" : "NO CARGADA");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
const db = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PASSWORD || '' ,

    {
        host : process.env.DB_HOST || '',
        port : Number(process.env.DB_PORT),
        dialect: "postgres",
        logging: false 
    }
)

export default db;