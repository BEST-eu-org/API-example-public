/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_accounting_Transfer__counterpartOther_ =  sequelize.define('general_accounting_Transfer__counterpartOther_', {
    counterpartOther_: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    siretNumber_: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_accounting_Transfer__counterpartOther_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "counterpartOther_" },
        ]
      },
      {
        name: "counterpartOther_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "counterpartOther_" },
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
        name: "siretNumber_",
        using: "BTREE",
        fields: [
          { name: "siretNumber_" },
        ]
      },
    ]
  });
	general_accounting_Transfer__counterpartOther_.associate = models => {
		general_accounting_Transfer__counterpartOther_.hasMany(models.general_accounting_Transfer_, { foreignKey: "counterpartOther_"});
	};
return general_accounting_Transfer__counterpartOther_


};
