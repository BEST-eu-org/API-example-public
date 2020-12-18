/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Country__cities_ =  sequelize.define('general_Country__cities_', {
    cities_: {
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
    Country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    name_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    photo_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Country__cities_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cities_" },
        ]
      },
      {
        name: "cities_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cities_" },
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
        name: "Country_",
        using: "BTREE",
        fields: [
          { name: "Country_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
    ]
  });
	general_Country__cities_.associate = models => {
		general_Country__cities_.belongsTo(models.general_Country_, { foreignKey: "Country_"});
	};
return general_Country__cities_


};
