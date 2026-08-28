import type { Request,Response,NextFunction } from "express";
export const validateUser = (

    req:Request,
    res:Response,
    next:NextFunction
) =>{

    

    const {first_name,last_name,email,phone,birthday_day,isActive,rol_id,Identifications_id,address_user_id}=req.body;

    
    const error: string[]=[];

    if(!first_name || first_name.trim()=== ''){
        error.push("first_name es obligatorio");
    }

    if(!last_name){
        error.push("last_name es obligatorio");
    }
    
    if(!email){
        error.push("email es obligatorio");
    }

    if(!phone){
        error.push("phone es obligatorio");
    }

    if(!birthday_day){
        error.push("birthday day es obligatorio");
    }

    if(!isActive){
        error.push("isActive es obligatorio");
    }

    if(!rol_id){
        error.push("rol_id es obligatorio");
    }

    if(!Identifications_id){
        error.push("Identifications_id es obligatorio");
    }

    if(!address_user_id){
        error.push("address_user_id es obligatorio");
    }


    if(error.length > 0 ){
        return res.status(400).json({
            message:"Datos invalidos",
            error
        })
    }


    next();






}

    




