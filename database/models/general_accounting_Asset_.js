/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_Asset_ =  sequelize.define('general_accounting_Asset_', {
    Asset_: {
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salvageValue_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    usefulLife_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    depreciationMethod_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    budgetCategory_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    currentValue_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_accounting_Asset_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Asset_" },
        ]
      },
      {
        name: "Asset_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Asset_" },
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
        name: "salvageValue_",
        using: "BTREE",
        fields: [
          { name: "salvageValue_" },
        ]
      },
      {
        name: "usefulLife_",
        using: "BTREE",
        fields: [
          { name: "usefulLife_" },
        ]
      },
      {
        name: "depreciationMethod_",
        using: "BTREE",
        fields: [
          { name: "depreciationMethod_" },
        ]
      },
      {
        name: "budgetCategory_",
        using: "BTREE",
        fields: [
          { name: "budgetCategory_" },
        ]
      },
      {
        name: "currentValue_",
        using: "BTREE",
        fields: [
          { name: "currentValue_" },
        ]
      },
    ]
  });
	general_accounting_Asset_.associate = models => {
		general_accounting_Asset_.hasMany(models.general_accounting_Transfer_, { foreignKey: "asset_"});
	};
return general_accounting_Asset_


};
