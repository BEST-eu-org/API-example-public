/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_Transfer__reconciliationSet_ =  sequelize.define('general_accounting_Transfer__reconciliationSet_', {
    reconciliationSet_: {
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
    Transfer_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Transfer_',
        key: 'Transfer_'
      }
    },
    Transfer__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Transfer_',
        key: 'Transfer_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_accounting_Transfer__reconciliationSet_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reconciliationSet_" },
        ]
      },
      {
        name: "reconciliationSet_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reconciliationSet_" },
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
        name: "Transfer_",
        using: "BTREE",
        fields: [
          { name: "Transfer_" },
        ]
      },
      {
        name: "Transfer__",
        using: "BTREE",
        fields: [
          { name: "Transfer__" },
        ]
      },
    ]
  });
	general_accounting_Transfer__reconciliationSet_.associate = models => {
		general_accounting_Transfer__reconciliationSet_.belongsTo(models.general_accounting_Transfer_, { foreignKey: "Transfer_"});
		general_accounting_Transfer__reconciliationSet_.belongsTo(models.general_accounting_Transfer_, { foreignKey: "Transfer__"});
	};
return general_accounting_Transfer__reconciliationSet_


};
