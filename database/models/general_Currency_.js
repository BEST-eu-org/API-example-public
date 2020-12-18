/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Currency_ =  sequelize.define('general_Currency_', {
    Currency_: {
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    iso4217Code_: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    symbolHtmlCode_: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Currency_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Currency_" },
        ]
      },
      {
        name: "Currency_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Currency_" },
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
        name: "iso4217Code_",
        using: "BTREE",
        fields: [
          { name: "iso4217Code_" },
        ]
      },
      {
        name: "symbolHtmlCode_",
        using: "BTREE",
        fields: [
          { name: "symbolHtmlCode_" },
        ]
      },
    ]
  });
	general_Currency_.associate = models => {
		general_Currency_.hasMany(models.best_internal_RefundRequest__expenses_, { foreignKey: "currency_"});
	};
return general_Currency_


};
