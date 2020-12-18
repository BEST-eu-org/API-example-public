/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_bank_Bank_ =  sequelize.define('general_bank_Bank_', {
    Bank_: {
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
      type: DataTypes.STRING(40),
      allowNull: true
    },
    address_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bic_: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_bank_Bank_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Bank_" },
        ]
      },
      {
        name: "Bank_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Bank_" },
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
        name: "address_",
        using: "BTREE",
        fields: [
          { name: "address_" },
        ]
      },
      {
        name: "bic_",
        using: "BTREE",
        fields: [
          { name: "bic_" },
        ]
      },
    ]
  });
	general_bank_Bank_.associate = models => {
		general_bank_Bank_.hasMany(models.general_accounting_Account__bankAccount_, { foreignKey: "bank_"});
		general_bank_Bank_.hasMany(models.general_company_Company__bankAccount_, { foreignKey: "bank_"});
	};
return general_bank_Bank_


};
