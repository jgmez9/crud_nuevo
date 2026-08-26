import type { Request,Response } from "express";
//import User from "../models/user.model.js"

/*export const getUSers= async (req:Request, res:Response) =>{

    try{

        const Users = await User.findAll();

        res.status(200).json(Users)
    }
    catch (error){
        console.error(error)


        res.status(500).json({
            message:"Error al obtener usuarios"
        })
    };
    
}

export const createUsers = async (req:Request,res:Response) => {

    try {

        const {name,email,rol_id}=req.body

        const user = await User.create({
            name,
            email,
            rol_id
        });
        res.status(201).json(user);


    }   catch (error) {
    console.error("ERROR COMPLETO:", error);

    res.status(500).json({
        message: "Error al crear el usuario",
        error: error
    });
}
}*/

export const createUser = async (req: Request, res: Response) => {
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