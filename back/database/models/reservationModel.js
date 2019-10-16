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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            default: Date.now()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            default: Date.now()
        }
    });
}

export {reservationModel};