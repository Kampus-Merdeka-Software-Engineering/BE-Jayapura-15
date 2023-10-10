const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Reviews = sequelize.define('Reviews', {
    idreviews: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    reviewer: {
        type: DataTypes.STRING
    },
    review: {
        type: DataTypes.TEXT
    }
});

module.exports = Reviews