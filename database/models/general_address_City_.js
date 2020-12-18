/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_address_City_ =  sequelize.define('general_address_City_', {
    City_: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TS_modify_: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    TS_create_: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    mapPositionX_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mapPostionY_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitute_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lattitute_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_address_City_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "City_" },
        ]
      },
      {
        name: "City_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "City_" },
        ]
      },
      {
        name: "TS_modify_",
        using: "BTREE",
        fields: [
          { name: "TS_modify_" },
        ]
      },
      {
        name: "TS_create_",
        using: "BTREE",
        fields: [
          { name: "TS_create_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "country_",
        using: "BTREE",
        fields: [
          { name: "country_" },
        ]
      },
      {
        name: "mapPositionX_",
        using: "BTREE",
        fields: [
          { name: "mapPositionX_" },
        ]
      },
      {
        name: "mapPostionY_",
        using: "BTREE",
        fields: [
          { name: "mapPostionY_" },
        ]
      },
      {
        name: "longitute_",
        using: "BTREE",
        fields: [
          { name: "longitute_" },
        ]
      },
      {
        name: "lattitute_",
        using: "BTREE",
        fields: [
          { name: "lattitute_" },
        ]
      },
    ]
  });
	general_address_City_.associate = models => {
		general_address_City_.hasMany(models.best_guide_CityGuide_, { foreignKey: "city_"});
		general_address_City_.hasMany(models.best_internal_Lbg_, { foreignKey: "city_"});
		general_address_City_.belongsTo(models.general_Country_, { foreignKey: "country_"});
		general_address_City_.hasMany(models.general_address_City__nativeNames_, { foreignKey: "City_"});
	};
return general_address_City_


};
