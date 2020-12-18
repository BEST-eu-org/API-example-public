/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_BudgetCategory_ =  sequelize.define('general_accounting_BudgetCategory_', {
    BudgetCategory_: {
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
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    budget_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Budget_',
        key: 'Budget_'
      }
    },
    budgetedAmount_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_accounting_BudgetCategory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BudgetCategory_" },
        ]
      },
      {
        name: "BudgetCategory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BudgetCategory_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "budget_",
        using: "BTREE",
        fields: [
          { name: "budget_" },
        ]
      },
      {
        name: "budgetedAmount_",
        using: "BTREE",
        fields: [
          { name: "budgetedAmount_" },
        ]
      },
    ]
  });
	general_accounting_BudgetCategory_.associate = models => {
		general_accounting_BudgetCategory_.hasMany(models.best_internal_RefundRequest_, { foreignKey: "budgetCategory_"});
		general_accounting_BudgetCategory_.belongsTo(models.general_accounting_Budget_, { foreignKey: "budget_"});
		general_accounting_BudgetCategory_.hasMany(models.general_accounting_Transfer_, { foreignKey: "category_"});
	};
return general_accounting_BudgetCategory_


};
