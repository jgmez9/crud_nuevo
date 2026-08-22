//Importamos todos los modelos de nuestra base de datos 

import Address_user from "../models/address_user.model.js";
import Campus from "../models/campus.model.js";
import Cities from "../models/cities.model.js";
import Clan from "../models/clan.model.js";
import Coder_clan from "../models/code_clan.model.js";
import Identifications from "../models/identification.model.js";
import Rol from "../models/roles.model.js";
import Room from "../models/room.model.js";
import Schedule from "../models/schedule.model.js";
import type_identifications from "../models/type_identification.model.js";
import type_route from "../models/type_route.model.js";
import User from "../models/user.model.js";


//Realizamos las relaciones entre tablas

Rol.hasMany(User,{
    foreignKey:"rol_id"
});

User.belongsTo(Rol,{
    foreignKey:"rol_id"
})

User.hasOne(Identifications,{
    foreignKey:"identifications_id"
})

Identifications.belongsTo(User,{
    foreignKey:"Identifications_id"
})


User.hasOne(Address_user,{
    foreignKey:"Address_user"
})

Address_user.belongsTo(User,{
    foreignKey:"Address_user"
})


