/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_CountryCategory__countries_ =  sequelize.define('general_event_CountryCategory__countries_', {
    countries_: {
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
    CountryCategory_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_CountryCategory_',
        key: 'CountryCategory_'
      }
    },
    Country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_CountryCategory__countries_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "countries_" },
        ]
      },
      {
        name: "countries_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "countries_" },
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
        name: "CountryCategory_",
        using: "BTREE",
        fields: [
          { name: "CountryCategory_" },
        ]
      },
      {
        name: "Country_",
        using: "BTREE",
        fields: [
          { name: "Country_" },
        ]
      },
    ]
  });
	general_event_CountryCategory__countries_.associate = models => {
		general_event_CountryCategory__countries_.belongsTo(models.general_event_CountryCategory_, { foreignKey: "CountryCategory_"});
		general_event_CountryCategory__countries_.belongsTo(models.general_Country_, { foreignKey: "Country_"});
	};
return general_event_CountryCategory__countries_


};
