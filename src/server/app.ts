import express from "express";
import "dotenv/config";

import db from "../config/db.js";

// Importamos las asociaciones
import "../associations/association.js";

import userRoutes from "../routes/user.routes.js";

import { setupAssociations } from "../associations/association.js"

import routes from "../routes/index.js";




setupAssociations();

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/api", routes);
app.use(errorHandler);

const startServer = async () => {

    try {

        // Probamos conexión con PostgreSQL
        await db.authenticate();

        console.log("Base de datos conectada correctamente");

        app.listen(3000, () => {
            console.log("Servidor corriendo en puerto 3000");
        });

    } catch (error) {

        console.error("Error al conectar con la base de datos:", error);

    }

};

startServer();