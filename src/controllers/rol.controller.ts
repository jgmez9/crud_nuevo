import type { Request,Response } from "express";


export const createRol = async (req: Request, res: Response) => {
    try {

        console.log("BODY RECIBIDO:", req.body);

        res.status(201).json({
            message: "Endpoint funcionando correctamente",
            data: req.body
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error en el endpoint"
        });
    }
};
