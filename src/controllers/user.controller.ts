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

export const getUSers =  async (req:Request,res:Response)=>{

    try {
    res.status(201).json({
        message:'GET funcionando correctamente',
        data: []
    })


    }catch (error){

        console.error(error);

        res.status(500).json({
            message:'Error en el GET'
            
        })
    }
}

export const getUsersbyId = async (req:Request,res:Response)=>{

    try{

        const {id} = req.params;

        res.status(201).json({
            message:'GET funciona correctamente',
            id:id
        })
    }
    catch (error){
        console.error(error);

        res.status(500).json({
            message:'Error al obtener el usuario'
        });
    };
};

export const updateUsers = async (req:Request,res:Response)=>{

    try{
        
        const {id} = req.params;

        console.log("ID:",id)
        console.log("DATOS A ACTUALIZAR ",req.body);

        res.status(201).json({
            message:"PUT funciona correctamente",
            id:id,
            data: req.body
        })

    } catch(error){

        res.status(500).json({

            message:"Error al actualizar el usuario"
        })
    }

}
export const deleteUsers = async (req:Request,res:Response)=>{

    try{

        const {id}=req.params;

        console.log("ID a eliminar: ",id)

        res.status(201).json({
            message:'DELETE funciona correctamente',
            id:id

        })

    } catch(error){
        res.status(500).json({
            message:'Error al eliminar el usuario'
        })
    }

}