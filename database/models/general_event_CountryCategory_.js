/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_CountryCategory_ =  sequelize.define('general_event_CountryCategory_', {
    CountryCategory_: {
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
      type: DataTypes.STRING(60),
      allowNull: true
    },
    fromDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    depositAmount_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    feePercentage_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_CountryCategory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CountryCategory_" },
        ]
      },
      {
        name: "CountryCategory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CountryCategory_" },
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
        name: "fromDate_",
        using: "BTREE",
        fields: [
          { name: "fromDate_" },
        ]
      },
      {
        name: "toDate_",
        using: "BTREE",
        fields: [
          { name: "toDate_" },
        ]
      },
      {
        name: "depositAmount_",
        using: "BTREE",
        fields: [
          { name: "depositAmount_" },
        ]
      },
      {
        name: "feePercentage_",
        using: "BTREE",
        fields: [
          { name: "feePercentage_" },
        ]
      },
    ]
  });
	general_event_CountryCategory_.associate = models => {
		general_event_CountryCategory_.hasMany(models.general_event_CountryCategory__countries_, { foreignKey: "CountryCategory_"});
	};
return general_event_CountryCategory_


};
