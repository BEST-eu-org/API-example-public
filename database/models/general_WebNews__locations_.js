/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_WebNews__locations_ =  sequelize.define('general_WebNews__locations_', {
    locations_: {
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
    WebNews_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_WebNews_',
        key: 'WebNews_'
      }
    },
    WebNewsLocation_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_WebNewsLocation_',
        key: 'WebNewsLocation_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_WebNews__locations_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locations_" },
        ]
      },
      {
        name: "locations_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locations_" },
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
        name: "WebNews_",
        using: "BTREE",
        fields: [
          { name: "WebNews_" },
        ]
      },
      {
        name: "WebNewsLocation_",
        using: "BTREE",
        fields: [
          { name: "WebNewsLocation_" },
        ]
      },
    ]
  });
	general_WebNews__locations_.associate = models => {
		general_WebNews__locations_.belongsTo(models.general_WebNews_, { foreignKey: "WebNews_"});
		general_WebNews__locations_.belongsTo(models.general_WebNewsLocation_, { foreignKey: "WebNewsLocation_"});
	};
return general_WebNews__locations_


};
