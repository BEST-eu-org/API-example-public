/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_address_City__nativeNames_ =  sequelize.define('general_address_City__nativeNames_', {
    nativeNames_: {
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
    City_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_address_City_',
        key: 'City_'
      }
    },
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    language_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_address_City__nativeNames_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nativeNames_" },
        ]
      },
      {
        name: "nativeNames_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nativeNames_" },
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
        name: "City_",
        using: "BTREE",
        fields: [
          { name: "City_" },
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
        name: "language_",
        using: "BTREE",
        fields: [
          { name: "language_" },
        ]
      },
    ]
  });
	general_address_City__nativeNames_.associate = models => {
		general_address_City__nativeNames_.belongsTo(models.general_address_City_, { foreignKey: "City_"});
		general_address_City__nativeNames_.belongsTo(models.general_Language_, { foreignKey: "language_"});
	};
return general_address_City__nativeNames_


};
