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



Rol.hasMany(User,{
    foreignKey:"rol_id"
});

User.belongsTo(Rol,{
    foreignKey:"rol_id"
})

User.hasOne(Identifications,{
    foreignKey:"Identifications_id"
})

Identifications.belongsTo(User,{
    foreignKey:"Identifications_id"
})


User.hasOne(Address_user,{
    foreignKey:"address_user_id"
})

Address_user.belongsTo(User,{
    foreignKey:"address_user_id"
})



Clan.belongsTo(User, {foreignKey:'id_tl'})


Clan.belongsTo(Room,{foreignKey:'room_id'})


Clan.belongsTo(type_route,{foreignKey:'type_route_id'})


Clan.belongsTo(Schedule,{foreignKey:'schedule_id'})



Coder_clan.belongsTo(Clan,{foreignKey:'clan_id'})
Coder_clan.belongsTo(User,{foreignKey:'code_id'})



Campus.hasMany(Room,{foreignKey:'campus_id'})
Room.belongsTo(Campus,{foreignKey:'campus_id'})


Cities.belongsTo(Campus,{foreignKey:'city_id'})


Identifications.belongsTo(type_identifications, {
    foreignKey: "type_identification",
    as: "typeIdentification",
});