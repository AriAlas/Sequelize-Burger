module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },


        Devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        // Timestamps
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
        freezeTableName: true
    
    });
    
    return Burger;
    
};