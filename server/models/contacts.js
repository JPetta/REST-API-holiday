'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Contacts extends Model{

  }
  
  Contacts.init({
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {sequelize});

  Contacts.associate = function(models) {
    // associations can be defined here
  };
  return Contacts;
};