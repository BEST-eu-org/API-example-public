/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Contact_ =  sequelize.define('general_Contact_', {
    Contact_: {
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
      type: DataTypes.STRING(40),
      allowNull: true
    },
    surname_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    gender_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    citizenship_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    function_: {
      type: DataTypes.STRING(50),
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
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    englishLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Contact_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
      {
        name: "Contact_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Contact_" },
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
        name: "surname_",
        using: "BTREE",
        fields: [
          { name: "surname_" },
        ]
      },
      {
        name: "gender_",
        using: "BTREE",
        fields: [
          { name: "gender_" },
        ]
      },
      {
        name: "citizenship_",
        using: "BTREE",
        fields: [
          { name: "citizenship_" },
        ]
      },
      {
        name: "function_",
        using: "BTREE",
        fields: [
          { name: "function_" },
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
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "englishLevel_",
        using: "BTREE",
        fields: [
          { name: "englishLevel_" },
        ]
      },
    ]
  });
	general_Contact_.associate = models => {
		general_Contact_.hasOne(models.best_contactdb_Contact_, { foreignKey: "contact__"});
		general_Contact_.belongsTo(models.general_Country_, { foreignKey: "citizenship_"});
		general_Contact_.belongsTo(models.general_Country_, { foreignKey: "country_"});
		general_Contact_.hasMany(models.general_Contact__businessCards_, { foreignKey: "Contact_"});
		general_Contact_.hasMany(models.general_Contact__comments_, { foreignKey: "Contact_"});
		general_Contact_.hasMany(models.general_Contact__emails_, { foreignKey: "Contact_"});
		general_Contact_.hasMany(models.general_Contact__lang_, { foreignKey: "Contact_"});
		general_Contact_.hasMany(models.general_Contact__phoneNumbers_, { foreignKey: "Contact_"});
	};
return general_Contact_


};
