/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_Account_ =  sequelize.define('general_accounting_Account_', {
    Account_: {
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
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "number_"
    },
    name_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    balance_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    bankAccount_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inUse_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_accounting_Account_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Account_" },
        ]
      },
      {
        name: "Account_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Account_" },
        ]
      },
      {
        name: "number_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "number_" },
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
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
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
        name: "balance_",
        using: "BTREE",
        fields: [
          { name: "balance_" },
        ]
      },
      {
        name: "bankAccount_",
        using: "BTREE",
        fields: [
          { name: "bankAccount_" },
        ]
      },
      {
        name: "inUse_",
        using: "BTREE",
        fields: [
          { name: "inUse_" },
        ]
      },
    ]
  });
	general_accounting_Account_.associate = models => {
		general_accounting_Account_.hasMany(models.general_accounting_Transfer_, { foreignKey: "toAccount_"});
		general_accounting_Account_.hasMany(models.general_accounting_Transfer_, { foreignKey: "fromAccount_"});
	};
return general_accounting_Account_


};
