/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_guide_CountryGuide_ =  sequelize.define('best_guide_CountryGuide_', {
    CountryGuide_: {
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
    country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    nationalDay_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nationalAnthem_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    legends_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    localCurrency_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    euroValue_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    localHour_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    voltage_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voltageUrl_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    traditions_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gestures_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    police_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ambulance_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    firemen_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    trainRoutes_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trainInfoline_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    busRoutes_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    busInfoline_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    typicalFood_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    typicalDrink_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    typicalStuff_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visible_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_guide_CountryGuide_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CountryGuide_" },
        ]
      },
      {
        name: "CountryGuide_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CountryGuide_" },
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
        name: "country_",
        using: "BTREE",
        fields: [
          { name: "country_" },
        ]
      },
      {
        name: "nationalDay_",
        using: "BTREE",
        fields: [
          { name: "nationalDay_" },
        ]
      },
      {
        name: "nationalAnthem_",
        using: "BTREE",
        fields: [
          { name: "nationalAnthem_" },
        ]
      },
      {
        name: "localCurrency_",
        using: "BTREE",
        fields: [
          { name: "localCurrency_" },
        ]
      },
      {
        name: "euroValue_",
        using: "BTREE",
        fields: [
          { name: "euroValue_" },
        ]
      },
      {
        name: "localHour_",
        using: "BTREE",
        fields: [
          { name: "localHour_" },
        ]
      },
      {
        name: "voltageUrl_",
        using: "BTREE",
        fields: [
          { name: "voltageUrl_" },
        ]
      },
      {
        name: "police_",
        using: "BTREE",
        fields: [
          { name: "police_" },
        ]
      },
      {
        name: "ambulance_",
        using: "BTREE",
        fields: [
          { name: "ambulance_" },
        ]
      },
      {
        name: "firemen_",
        using: "BTREE",
        fields: [
          { name: "firemen_" },
        ]
      },
      {
        name: "trainInfoline_",
        using: "BTREE",
        fields: [
          { name: "trainInfoline_" },
        ]
      },
      {
        name: "busInfoline_",
        using: "BTREE",
        fields: [
          { name: "busInfoline_" },
        ]
      },
      {
        name: "visible_",
        using: "BTREE",
        fields: [
          { name: "visible_" },
        ]
      },
    ]
  });
	best_guide_CountryGuide_.associate = models => {
		best_guide_CountryGuide_.belongsTo(models.general_Country_, { foreignKey: "country_"});
	};
return best_guide_CountryGuide_


};
