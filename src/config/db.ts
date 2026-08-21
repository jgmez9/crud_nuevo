//creamos la conexion a la base de datos

import { Sequelize } from "sequelize";
import "dotenv/config"    


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