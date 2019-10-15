require('dotenv').config();
import {DataTypes, Sequelize} from 'sequelize';
import {userModel} from "./model/userModel";
import {roomModel} from "./model/roomModel";
import {reservationModel} from "./model/reservationModel";

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_USER_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log('connection success!'))
    .catch((e) => console.error(e));

const db = {
    User: userModel(sequelize, DataTypes),
    Room: roomModel(sequelize, DataTypes),
    Reservation: reservationModel(sequelize, DataTypes)
};

export {db};
