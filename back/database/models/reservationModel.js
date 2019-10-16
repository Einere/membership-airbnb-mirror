function reservationModel(sequelize, DataTypes) {
    return sequelize.define('Reservation', {
        checkIn: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        checkOut: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
}

export {reservationModel};