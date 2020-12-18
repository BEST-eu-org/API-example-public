/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Tip_ =  sequelize.define('general_Tip_', {
    Tip_: {
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
    content_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_WebNewsLocation_',
        key: 'WebNewsLocation_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Tip_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Tip_" },
        ]
      },
      {
        name: "Tip_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Tip_" },
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
        name: "location_",
        using: "BTREE",
        fields: [
          { name: "location_" },
        ]
      },
    ]
  });
	general_Tip_.associate = models => {
		general_Tip_.belongsTo(models.general_WebNewsLocation_, { foreignKey: "location_"});
	};
return general_Tip_


};
