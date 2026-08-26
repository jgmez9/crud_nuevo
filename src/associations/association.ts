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


//Realizamos las relaciones de la tabla User

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


//Realizamos las relaciones de la tabla Clan

Clan.belongsTo(User, {foreignKey:'id_tl'})


Clan.belongsTo(Room,{foreignKey:'room_id'})


Clan.belongsTo(type_route,{foreignKey:'type_r'})


Clan.belongsTo(Schedule)


//Realizamos las relaciones de la tabla Coder_clan

Coder_clan.belongsTo(Clan,{foreignKey:'clan_id'})
Coder_clan.belongsTo(User,{foreignKey:'code_id'})


//Realizamos las relaciones de la tabla room

Campus.hasMany(Room,{foreignKey:'Campus_id'})
Room.belongsTo(Campus,{foreignKey:'Campus_id'})

//Realizamos las relaciones de la tabla city


Cities.belongsTo(Campus,{foreignKey:'city_id'})

//Realizamos la relacion de identifications

Identifications.belongsTo(type_identifications, {
    foreignKey: "type_identification",
    as: "typeIdentification",
});