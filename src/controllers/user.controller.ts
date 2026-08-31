import type { Request, Response } from "express";
import User from "../models/user.model.js";

export const createUser = async (req: Request, res: Response) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json({
            message: "Usuario creado correctamente",
            user
        });

    } catch (error) {

        console.error("ERROR:", error);

        res.status(500).json({
            message: "Error al crear el usuario"
        });
    }
};