/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_Transfer_ =  sequelize.define('general_accounting_Transfer_', {
    Transfer_: {
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
      type: DataTypes.STRING(150),
      allowNull: true
    },
    counterpartOrg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    counterpartLbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    counterpartPerson_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    counterpartOther_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Transfer__counterpartOther_',
        key: 'counterpartOther_'
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
    toAccount_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Account_',
        key: 'Account_'
      }
    },
    fromAccount_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Account_',
        key: 'Account_'
      }
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_BudgetCategory_',
        key: 'BudgetCategory_'
      }
    },
    amount_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    invoiceDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payementDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    accountingDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reconciliationStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    refundRequest_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_RefundRequest_',
        key: 'RefundRequest_'
      }
    },
    invoice_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    },
    productOrder_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_prop_ProductOrder_',
        key: 'ProductOrder_'
      }
    },
    asset_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_accounting_Asset_',
        key: 'Asset_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_accounting_Transfer_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Transfer_" },
        ]
      },
      {
        name: "Transfer_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Transfer_" },
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
        name: "counterpartOrg_",
        using: "BTREE",
        fields: [
          { name: "counterpartOrg_" },
        ]
      },
      {
        name: "counterpartLbg_",
        using: "BTREE",
        fields: [
          { name: "counterpartLbg_" },
        ]
      },
      {
        name: "counterpartPerson_",
        using: "BTREE",
        fields: [
          { name: "counterpartPerson_" },
        ]
      },
      {
        name: "counterpartOther_",
        using: "BTREE",
        fields: [
          { name: "counterpartOther_" },
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
        name: "toAccount_",
        using: "BTREE",
        fields: [
          { name: "toAccount_" },
        ]
      },
      {
        name: "fromAccount_",
        using: "BTREE",
        fields: [
          { name: "fromAccount_" },
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
        name: "amount_",
        using: "BTREE",
        fields: [
          { name: "amount_" },
        ]
      },
      {
        name: "accountingDate_",
        using: "BTREE",
        fields: [
          { name: "accountingDate_" },
        ]
      },
      {
        name: "reconciliationStatus_",
        using: "BTREE",
        fields: [
          { name: "reconciliationStatus_" },
        ]
      },
      {
        name: "refundRequest_",
        using: "BTREE",
        fields: [
          { name: "refundRequest_" },
        ]
      },
      {
        name: "invoice_",
        using: "BTREE",
        fields: [
          { name: "invoice_" },
        ]
      },
      {
        name: "reason_",
        using: "BTREE",
        fields: [
          { name: "reason_" },
        ]
      },
      {
        name: "productOrder_",
        using: "BTREE",
        fields: [
          { name: "productOrder_" },
        ]
      },
      {
        name: "asset_",
        using: "BTREE",
        fields: [
          { name: "asset_" },
        ]
      },
    ]
  });
	general_accounting_Transfer_.associate = models => {
		general_accounting_Transfer_.belongsTo(models.general_company_Company_, { foreignKey: "counterpartOrg_"});
		general_accounting_Transfer_.belongsTo(models.best_internal_Lbg_, { foreignKey: "counterpartLbg_"});
		general_accounting_Transfer_.belongsTo(models.general_Person_, { foreignKey: "counterpartPerson_"});
		general_accounting_Transfer_.belongsTo(models.general_accounting_Transfer__counterpartOther_, { foreignKey: "counterpartOther_"});
		general_accounting_Transfer_.belongsTo(models.best_internal_Event_, { foreignKey: "internalEvent_"});
		general_accounting_Transfer_.belongsTo(models.best_johnny_Activity_, { foreignKey: "basEvent_"});
		general_accounting_Transfer_.belongsTo(models.general_accounting_Account_, { foreignKey: "toAccount_"});
		general_accounting_Transfer_.belongsTo(models.general_accounting_Account_, { foreignKey: "fromAccount_"});
		general_accounting_Transfer_.belongsTo(models.general_accounting_BudgetCategory_, { foreignKey: "category_"});
		general_accounting_Transfer_.belongsTo(models.best_internal_RefundRequest_, { foreignKey: "refundRequest_"});
		general_accounting_Transfer_.belongsTo(models.general_archive_File_, { foreignKey: "invoice_"});
		general_accounting_Transfer_.belongsTo(models.best_internal_prop_ProductOrder_, { foreignKey: "productOrder_"});
		general_accounting_Transfer_.belongsTo(models.general_accounting_Asset_, { foreignKey: "asset_"});
		general_accounting_Transfer_.hasMany(models.general_accounting_Transfer__reconciliationSet_, { foreignKey: "Transfer_"});
		general_accounting_Transfer_.hasMany(models.general_accounting_Transfer__reconciliationSet_, { foreignKey: "Transfer__"});
	};
return general_accounting_Transfer_


};
