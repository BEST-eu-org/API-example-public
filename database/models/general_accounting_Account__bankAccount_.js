/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_Account__bankAccount_ =  sequelize.define('general_accounting_Account__bankAccount_', {
    bankAccount_: {
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
    iban_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bank_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_bank_Bank_',
        key: 'Bank_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_accounting_Account__bankAccount_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankAccount_" },
        ]
      },
      {
        name: "bankAccount_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankAccount_" },
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
        name: "iban_",
        using: "BTREE",
        fields: [
          { name: "iban_" },
        ]
      },
      {
        name: "bank_",
        using: "BTREE",
        fields: [
          { name: "bank_" },
        ]
      },
    ]
  });
	general_accounting_Account__bankAccount_.associate = models => {
		general_accounting_Account__bankAccount_.belongsTo(models.general_bank_Bank_, { foreignKey: "bank_"});
	};
return general_accounting_Account__bankAccount_


};
