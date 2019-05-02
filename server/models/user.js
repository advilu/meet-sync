module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        googleId: DataTypes.STRING,
        isManager: DataTypes.BOOLEAN
    });

    User.associate = (models) => {
        User.hasMany(models.Survey);
    };

    return User;
};