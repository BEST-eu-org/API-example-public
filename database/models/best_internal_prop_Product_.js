/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_prop_Product_ =  sequelize.define('best_internal_prop_Product_', {
    Product_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    colour_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    size_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sourceFile_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnail_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    packageSize_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orderDL_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deliveryMethod_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expectedArrival_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sent_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_prop_Product_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Product_" },
        ]
      },
      {
        name: "Product_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Product_" },
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
        name: "colour_",
        using: "BTREE",
        fields: [
          { name: "colour_" },
        ]
      },
      {
        name: "price_",
        using: "BTREE",
        fields: [
          { name: "price_" },
        ]
      },
      {
        name: "size_",
        using: "BTREE",
        fields: [
          { name: "size_" },
        ]
      },
      {
        name: "sourceFile_",
        using: "BTREE",
        fields: [
          { name: "sourceFile_" },
        ]
      },
      {
        name: "thumbnail_",
        using: "BTREE",
        fields: [
          { name: "thumbnail_" },
        ]
      },
      {
        name: "packageSize_",
        using: "BTREE",
        fields: [
          { name: "packageSize_" },
        ]
      },
      {
        name: "orderDL_",
        using: "BTREE",
        fields: [
          { name: "orderDL_" },
        ]
      },
      {
        name: "deliveryMethod_",
        using: "BTREE",
        fields: [
          { name: "deliveryMethod_" },
        ]
      },
      {
        name: "expectedArrival_",
        using: "BTREE",
        fields: [
          { name: "expectedArrival_" },
        ]
      },
      {
        name: "sent_",
        using: "BTREE",
        fields: [
          { name: "sent_" },
        ]
      },
    ]
  });
	best_internal_prop_Product_.associate = models => {
		best_internal_prop_Product_.hasMany(models.best_internal_prop_ProductOrder_, { foreignKey: "product_"});
		best_internal_prop_Product_.belongsTo(models.general_Image_, { foreignKey: "thumbnail_"});
	};
return best_internal_prop_Product_


};
