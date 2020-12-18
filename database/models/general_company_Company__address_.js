/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Company__address_ =  sequelize.define('general_company_Company__address_', {
    address_: {
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
    tableName: 'general_company_Company__address_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_" },
        ]
      },
      {
        name: "address_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_" },
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
	general_company_Company__address_.associate = models => {
		general_company_Company__address_.hasMany(models.general_company_Company_, { foreignKey: "address_"});
		general_company_Company__address_.belongsTo(models.general_Country_, { foreignKey: "country_"});
	};
return general_company_Company__address_


};
