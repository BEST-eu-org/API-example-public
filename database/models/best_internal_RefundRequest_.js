/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_RefundRequest_ =  sequelize.define('best_internal_RefundRequest_', {
    RefundRequest_: {
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
    requestor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    internalEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    basEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    },
    otherEvent_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    expensesType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    requestedAmount_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    requestorComments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bankAccount_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grantedAmount_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    treasurerComments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transferedToAccounting_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iban_: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    bic_: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    address_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    budgetCategory_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_BudgetCategory_',
        key: 'BudgetCategory_'
      }
    },
    requestDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    compiledReceipts_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_RefundRequest_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RefundRequest_" },
        ]
      },
      {
        name: "RefundRequest_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RefundRequest_" },
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
        name: "requestor_",
        using: "BTREE",
        fields: [
          { name: "requestor_" },
        ]
      },
      {
        name: "internalEvent_",
        using: "BTREE",
        fields: [
          { name: "internalEvent_" },
        ]
      },
      {
        name: "basEvent_",
        using: "BTREE",
        fields: [
          { name: "basEvent_" },
        ]
      },
      {
        name: "otherEvent_",
        using: "BTREE",
        fields: [
          { name: "otherEvent_" },
        ]
      },
      {
        name: "expensesType_",
        using: "BTREE",
        fields: [
          { name: "expensesType_" },
        ]
      },
      {
        name: "grantedAmount_",
        using: "BTREE",
        fields: [
          { name: "grantedAmount_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "transferedToAccounting_",
        using: "BTREE",
        fields: [
          { name: "transferedToAccounting_" },
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
        name: "bic_",
        using: "BTREE",
        fields: [
          { name: "bic_" },
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
        name: "requestDate_",
        using: "BTREE",
        fields: [
          { name: "requestDate_" },
        ]
      },
      {
        name: "compiledReceipts_",
        using: "BTREE",
        fields: [
          { name: "compiledReceipts_" },
        ]
      },
    ]
  });
	best_internal_RefundRequest_.associate = models => {
		best_internal_RefundRequest_.belongsTo(models.general_Person_, { foreignKey: "requestor_"});
		best_internal_RefundRequest_.belongsTo(models.best_internal_Event_, { foreignKey: "internalEvent_"});
		best_internal_RefundRequest_.belongsTo(models.best_johnny_Activity_, { foreignKey: "basEvent_"});
		best_internal_RefundRequest_.belongsTo(models.general_accounting_BudgetCategory_, { foreignKey: "budgetCategory_"});
		best_internal_RefundRequest_.belongsTo(models.general_archive_File_, { foreignKey: "compiledReceipts_"});
		best_internal_RefundRequest_.hasMany(models.best_internal_RefundRequest__expensesReceipts_, { foreignKey: "RefundRequest_"});
		best_internal_RefundRequest_.hasMany(models.best_internal_RefundRequest__expenses_, { foreignKey: "RefundRequest_"});
		best_internal_RefundRequest_.hasMany(models.general_accounting_Transfer_, { foreignKey: "refundRequest_"});
	};
return best_internal_RefundRequest_


};
