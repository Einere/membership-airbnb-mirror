function userModel(sequelize, DataTypes) {
    return sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
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

export {userModel};