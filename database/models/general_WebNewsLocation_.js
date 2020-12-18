/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_WebNewsLocation_ =  sequelize.define('general_WebNewsLocation_', {
    WebNewsLocation_: {
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sortOrder_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    label_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Label_',
        key: 'Label_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_WebNewsLocation_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WebNewsLocation_" },
        ]
      },
      {
        name: "WebNewsLocation_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WebNewsLocation_" },
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
        name: "sortOrder_",
        using: "BTREE",
        fields: [
          { name: "sortOrder_" },
        ]
      },
      {
        name: "team_",
        using: "BTREE",
        fields: [
          { name: "team_" },
        ]
      },
      {
        name: "label_",
        using: "BTREE",
        fields: [
          { name: "label_" },
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
	general_WebNewsLocation_.associate = models => {
		general_WebNewsLocation_.hasMany(models.general_Tip_, { foreignKey: "location_"});
		general_WebNewsLocation_.belongsTo(models.general_Team_, { foreignKey: "team_"});
		general_WebNewsLocation_.belongsTo(models.general_Label_, { foreignKey: "label_"});
		general_WebNewsLocation_.hasMany(models.general_WebNews__locations_, { foreignKey: "WebNewsLocation_"});
	};
return general_WebNewsLocation_


};
