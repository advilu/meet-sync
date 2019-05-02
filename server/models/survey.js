module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define("Survey", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        response: DataTypes.INTEGER,
        shortResponse: DataTypes.TEXT
    });

    Survey.associate = (models) => {
        Survey.belongsTo(models.User);
    };

    return Survey;
};