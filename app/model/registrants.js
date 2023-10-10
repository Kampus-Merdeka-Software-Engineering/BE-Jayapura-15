const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Registrants = sequelize.define('Registrants', {
    idregistrants: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Registrants