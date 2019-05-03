module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define("Survey", {
        week: DataTypes.INTEGER,
        clarity: DataTypes.INTEGER,
        satisfaction: DataTypes.INTEGER,
        team: DataTypes.INTEGER,
        forward: DataTypes.INTEGER,
        inclusion: DataTypes.INTEGER,
        wentWell: DataTypes.TEXT,
        proud: DataTypes.TEXT,
        goals: DataTypes.TEXT,
        roadblocks: DataTypes.TEXT,
        pdCurrent: DataTypes.TEXT,
        pdUpdate: DataTypes.TEXT,
        selfReview: DataTypes.TEXT,
        managerFeedback: DataTypes.TEXT,
        stretch: DataTypes.TEXT
    });

    Survey.associate = (models) => {
        Survey.belongsTo(models.User);
    };

    return Survey;
};