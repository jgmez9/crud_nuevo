// ============================
// IMPORTACIÓN DE MODELOS
// ============================

import Address_user from "../models/address_user.model.js";
import Campus from "../models/campus.model.js";
import Cities from "../models/cities.model.js";
import Clan from "../models/clan.model.js";
import Coder_clan from "../models/code_clan.model.js";
import Identifications from "../models/identification.model.js";
import Rol from "../models/roles.model.js";
import Room from "../models/room.model.js";
import Schedule from "../models/schedule.model.js";
import Type_identifications from "../models/type_identification.model.js";
import Type_route from "../models/type_route.model.js";
import User from "../models/user.model.js";


// ======================================
// ROL - USER
// Un rol puede tener muchos usuarios
// Un usuario pertenece a un rol
// ======================================

Rol.hasMany(User, {
    foreignKey: "rol_id",
    as: "users"
});

User.belongsTo(Rol, {
    foreignKey: "rol_id",
    as: "role"
});


// ======================================
// IDENTIFICATION - USER
// Una identificación pertenece a un usuario
// Un usuario tiene una identificación
// ======================================

Identifications.hasOne(User, {
    foreignKey: "identification_id",
    as: "user"
});

User.belongsTo(Identifications, {
    foreignKey: "identification_id",
    as: "identification"
});


// ======================================
// ADDRESS - USER
// Una dirección pertenece a un usuario
// Un usuario tiene una dirección
// ======================================

Address_user.hasOne(User, {
    foreignKey: "address_user_id",
    as: "user"
});

User.belongsTo(Address_user, {
    foreignKey: "address_user_id",
    as: "address"
});


// ======================================
// USER (TEAM LEADER) - CLAN
// Un TL puede tener varios clanes
// Un clan pertenece a un TL
// ======================================

User.hasMany(Clan, {
    foreignKey: "tl_id",
    as: "clans"
});

Clan.belongsTo(User, {
    foreignKey: "tl_id",
    as: "teamLeader"
});


// ======================================
// ROOM - CLAN
// Un salón puede tener varios clanes
// Un clan pertenece a un salón
// ======================================

Room.hasMany(Clan, {
    foreignKey: "room_id",
    as: "clans"
});

Clan.belongsTo(Room, {
    foreignKey: "room_id",
    as: "room"
});


// ======================================
// TYPE ROUTE - CLAN
// Un tipo de ruta puede tener varios clanes
// Un clan pertenece a un tipo de ruta
// ======================================

Type_route.hasMany(Clan, {
    foreignKey: "type_route_id",
    as: "clans"
});

Clan.belongsTo(Type_route, {
    foreignKey: "type_route_id",
    as: "typeRoute"
});


// ======================================
// SCHEDULE - CLAN
// Un horario puede tener varios clanes
// Un clan pertenece a un horario
// ======================================

Schedule.hasMany(Clan, {
    foreignKey: "schedule_id",
    as: "clans"
});

Clan.belongsTo(Schedule, {
    foreignKey: "schedule_id",
    as: "schedule"
});


// ======================================
// CLAN - CODER_CLAN
// Un clan puede tener muchos coders
// ======================================

Clan.hasMany(Coder_clan, {
    foreignKey: "clan_id",
    as: "coderClans"
});

Coder_clan.belongsTo(Clan, {
    foreignKey: "clan_id",
    as: "clan"
});


// ======================================
// USER - CODER_CLAN
// Un usuario puede pertenecer a registros
// dentro de coder_clan
// ======================================

User.hasMany(Coder_clan, {
    foreignKey: "coder_id",
    as: "coderClans"
});

Coder_clan.belongsTo(User, {
    foreignKey: "coder_id",
    as: "coder"
});


// ======================================
// CAMPUS - ROOM
// Un campus puede tener muchos salones
// Un salón pertenece a un campus
// ======================================

Campus.hasMany(Room, {
    foreignKey: "campus_id",
    as: "rooms"
});

Room.belongsTo(Campus, {
    foreignKey: "campus_id",
    as: "campus"
});


// ======================================
// CITY - CAMPUS
// Una ciudad puede tener varios campus
// Un campus pertenece a una ciudad
// ======================================

Cities.hasMany(Campus, {
    foreignKey: "city_id",
    as: "campuses"
});

Campus.belongsTo(Cities, {
    foreignKey: "city_id",
    as: "city"
});


// ======================================
// TYPE IDENTIFICATION - IDENTIFICATION
// Un tipo de identificación puede tener
// muchas identificaciones
// ======================================

Type_identifications.hasMany(Identifications, {
    foreignKey: "type_identification_id",
    as: "identifications"
});

Identifications.belongsTo(Type_identifications, {
    foreignKey: "type_identification_id",
    as: "typeIdentification"
});