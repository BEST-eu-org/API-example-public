/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_RefundRequest__expenses_ =  sequelize.define('best_internal_RefundRequest__expenses_', {
    expenses_: {
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
    RefundRequest_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_RefundRequest_',
        key: 'RefundRequest_'
      }
    },
    travelFrom_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    travelTo_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    transportationMean_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    explanations_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amount_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    currency_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Currency_',
        key: 'Currency_'
      }
    },
    purchaseDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    convertedAmountEuro_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    receipt_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    },
    receiptPartial_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_RefundRequest__expenses_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expenses_" },
        ]
      },
      {
        name: "expenses_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expenses_" },
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
        name: "RefundRequest_",
        using: "BTREE",
        fields: [
          { name: "RefundRequest_" },
        ]
      },
      {
        name: "travelFrom_",
        using: "BTREE",
        fields: [
          { name: "travelFrom_" },
        ]
      },
      {
        name: "travelTo_",
        using: "BTREE",
        fields: [
          { name: "travelTo_" },
        ]
      },
      {
        name: "transportationMean_",
        using: "BTREE",
        fields: [
          { name: "transportationMean_" },
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
        name: "currency_",
        using: "BTREE",
        fields: [
          { name: "currency_" },
        ]
      },
      {
        name: "purchaseDate_",
        using: "BTREE",
        fields: [
          { name: "purchaseDate_" },
        ]
      },
      {
        name: "convertedAmountEuro_",
        using: "BTREE",
        fields: [
          { name: "convertedAmountEuro_" },
        ]
      },
      {
        name: "receipt_",
        using: "BTREE",
        fields: [
          { name: "receipt_" },
        ]
      },
      {
        name: "receiptPartial_",
        using: "BTREE",
        fields: [
          { name: "receiptPartial_" },
        ]
      },
    ]
  });
	best_internal_RefundRequest__expenses_.associate = models => {
		best_internal_RefundRequest__expenses_.belongsTo(models.best_internal_RefundRequest_, { foreignKey: "RefundRequest_"});
		best_internal_RefundRequest__expenses_.belongsTo(models.general_Currency_, { foreignKey: "currency_"});
		best_internal_RefundRequest__expenses_.belongsTo(models.general_archive_File_, { foreignKey: "receipt_"});
		best_internal_RefundRequest__expenses_.belongsTo(models.general_archive_File_, { foreignKey: "receiptPartial_"});
	};
return best_internal_RefundRequest__expenses_


};
