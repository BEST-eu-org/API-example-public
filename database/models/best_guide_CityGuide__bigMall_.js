/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_guide_CityGuide__bigMall_ =  sequelize.define('best_guide_CityGuide__bigMall_', {
    bigMall_: {
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    streetno_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    zipcode_: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    city_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    phone_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    otherphone_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usage_: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_guide_CityGuide__bigMall_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bigMall_" },
        ]
      },
      {
        name: "bigMall_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bigMall_" },
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
        name: "description_",
        using: "BTREE",
        fields: [
          { name: "description_" },
        ]
      },
      {
        name: "streetno_",
        using: "BTREE",
        fields: [
          { name: "streetno_" },
        ]
      },
      {
        name: "zipcode_",
        using: "BTREE",
        fields: [
          { name: "zipcode_" },
        ]
      },
      {
        name: "city_",
        using: "BTREE",
        fields: [
          { name: "city_" },
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
        name: "phone_",
        using: "BTREE",
        fields: [
          { name: "phone_" },
        ]
      },
      {
        name: "otherphone_",
        using: "BTREE",
        fields: [
          { name: "otherphone_" },
        ]
      },
      {
        name: "fax_",
        using: "BTREE",
        fields: [
          { name: "fax_" },
        ]
      },
      {
        name: "usage_",
        using: "BTREE",
        fields: [
          { name: "usage_" },
        ]
      },
    ]
  });
	best_guide_CityGuide__bigMall_.associate = models => {
		best_guide_CityGuide__bigMall_.belongsTo(models.general_Country_, { foreignKey: "country_"});
	};
return best_guide_CityGuide__bigMall_


};
