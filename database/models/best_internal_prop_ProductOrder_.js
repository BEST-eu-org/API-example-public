/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_prop_ProductOrder_ =  sequelize.define('best_internal_prop_ProductOrder_', {
    ProductOrder_: {
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
    product_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_prop_Product_',
        key: 'Product_'
      }
    },
    pieces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orderedByPerson_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    orderedByLbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    deliveryAddress_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    receivedOn_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    transferedToAccounting_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_prop_ProductOrder_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductOrder_" },
        ]
      },
      {
        name: "ProductOrder_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductOrder_" },
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
        name: "product_",
        using: "BTREE",
        fields: [
          { name: "product_" },
        ]
      },
      {
        name: "pieces_",
        using: "BTREE",
        fields: [
          { name: "pieces_" },
        ]
      },
      {
        name: "orderedByPerson_",
        using: "BTREE",
        fields: [
          { name: "orderedByPerson_" },
        ]
      },
      {
        name: "orderedByLbg_",
        using: "BTREE",
        fields: [
          { name: "orderedByLbg_" },
        ]
      },
      {
        name: "receivedOn_",
        using: "BTREE",
        fields: [
          { name: "receivedOn_" },
        ]
      },
      {
        name: "transferedToAccounting_",
        using: "BTREE",
        fields: [
          { name: "transferedToAccounting_" },
        ]
      },
    ]
  });
	best_internal_prop_ProductOrder_.associate = models => {
		best_internal_prop_ProductOrder_.belongsTo(models.best_internal_prop_Product_, { foreignKey: "product_"});
		best_internal_prop_ProductOrder_.belongsTo(models.best_internal_Student_, { foreignKey: "orderedByPerson_"});
		best_internal_prop_ProductOrder_.belongsTo(models.best_internal_Lbg_, { foreignKey: "orderedByLbg_"});
		best_internal_prop_ProductOrder_.hasMany(models.general_accounting_Transfer_, { foreignKey: "productOrder_"});
	};
return best_internal_prop_ProductOrder_


};
