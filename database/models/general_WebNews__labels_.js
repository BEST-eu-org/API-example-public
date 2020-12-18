/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_WebNews__labels_ =  sequelize.define('general_WebNews__labels_', {
    labels_: {
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
    Label_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Label_',
        key: 'Label_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_WebNews__labels_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "labels_" },
        ]
      },
      {
        name: "labels_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "labels_" },
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
        name: "Label_",
        using: "BTREE",
        fields: [
          { name: "Label_" },
        ]
      },
    ]
  });
	general_WebNews__labels_.associate = models => {
		general_WebNews__labels_.belongsTo(models.general_WebNews_, { foreignKey: "WebNews_"});
		general_WebNews__labels_.belongsTo(models.general_Label_, { foreignKey: "Label_"});
	};
return general_WebNews__labels_


};
