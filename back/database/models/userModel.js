function userModel(sequelize, DataTypes) {
    return sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
}

export {userModel};