/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_RefundRequest__expensesReceipts_ =  sequelize.define('best_internal_RefundRequest__expensesReceipts_', {
    expensesReceipts_: {
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
    file_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_RefundRequest__expensesReceipts_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expensesReceipts_" },
        ]
      },
      {
        name: "expensesReceipts_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expensesReceipts_" },
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
        name: "file_",
        using: "BTREE",
        fields: [
          { name: "file_" },
        ]
      },
    ]
  });
	best_internal_RefundRequest__expensesReceipts_.associate = models => {
		best_internal_RefundRequest__expensesReceipts_.belongsTo(models.best_internal_RefundRequest_, { foreignKey: "RefundRequest_"});
		best_internal_RefundRequest__expensesReceipts_.belongsTo(models.general_archive_File_, { foreignKey: "file_"});
	};
return best_internal_RefundRequest__expensesReceipts_


};
