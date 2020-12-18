/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_WebNews__inappropriate_ =  sequelize.define('general_WebNews__inappropriate_', {
    inappropriate_: {
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
    reason_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WebNews_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_WebNews_',
        key: 'WebNews_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_WebNews__inappropriate_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inappropriate_" },
        ]
      },
      {
        name: "inappropriate_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inappropriate_" },
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
    ]
  });
	general_WebNews__inappropriate_.associate = models => {
		general_WebNews__inappropriate_.belongsTo(models.general_WebNews_, { foreignKey: "WebNews_"});
	};
return general_WebNews__inappropriate_


};
