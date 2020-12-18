/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Country_ =  sequelize.define('general_Country_', {
    Country_: {
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    area_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    population_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inEU_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inSchengen_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iso2LetterCode_: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    iso3LetterCode_: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    numericalCode_: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    uid_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    visaInfoIncomingURL_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    visaInfoOutgoingURL_: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Country_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Country_" },
        ]
      },
      {
        name: "Country_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Country_" },
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
        name: "area_",
        using: "BTREE",
        fields: [
          { name: "area_" },
        ]
      },
      {
        name: "population_",
        using: "BTREE",
        fields: [
          { name: "population_" },
        ]
      },
      {
        name: "inEU_",
        using: "BTREE",
        fields: [
          { name: "inEU_" },
        ]
      },
      {
        name: "inSchengen_",
        using: "BTREE",
        fields: [
          { name: "inSchengen_" },
        ]
      },
      {
        name: "visaInfoIncomingURL_",
        using: "BTREE",
        fields: [
          { name: "visaInfoIncomingURL_" },
        ]
      },
      {
        name: "visaInfoOutgoingURL_",
        using: "BTREE",
        fields: [
          { name: "visaInfoOutgoingURL_" },
        ]
      },
      {
        name: "iso2LetterCode_",
        using: "BTREE",
        fields: [
          { name: "iso2LetterCode_" },
        ]
      },
      {
        name: "iso3LetterCode_",
        using: "BTREE",
        fields: [
          { name: "iso3LetterCode_" },
        ]
      },
      {
        name: "numericalCode_",
        using: "BTREE",
        fields: [
          { name: "numericalCode_" },
        ]
      },
      {
        name: "uid_",
        using: "BTREE",
        fields: [
          { name: "uid_" },
        ]
      },
    ]
  });
	general_Country_.associate = models => {
		general_Country_.hasMany(models.best_guide_CityGuide__bigMall_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CityGuide__eating_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CityGuide__internetPlace_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CityGuide__leave_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CityGuide__livingPlace_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CityGuide__party_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CityGuide__touristOffice_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_guide_CountryGuide_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_minerva_CareerNewsletter__filter__country_, { foreignKey: "Country__"});
		general_Country_.hasMany(models.best_minerva_CompanyRepresentative_, { foreignKey: "country_"});
		general_Country_.hasMany(models.best_minerva_Company__countries_, { foreignKey: "Country_"});
		general_Country_.hasMany(models.general_Contact_, { foreignKey: "citizenship_"});
		general_Country_.hasMany(models.general_Contact_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_Country__cities_, { foreignKey: "Country_"});
		general_Country_.hasMany(models.general_Country__languages_, { foreignKey: "Country_"});
		general_Country_.hasMany(models.general_Country__noVisaCitizens_, { foreignKey: "Country_"});
		general_Country_.hasMany(models.general_Country__noVisaCitizens_, { foreignKey: "Country__"});
		general_Country_.hasMany(models.general_Person_, { foreignKey: "citizenship_"});
		general_Country_.hasMany(models.general_Person__address_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_Person__employment_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_University_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_University__location_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_address_City_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_bank_Bank__address_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_company_CompanyRepresentative__address_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_company_Company_, { foreignKey: "hqcountry_"});
		general_Country_.hasMany(models.general_company_Company_, { foreignKey: "bankcountry_"});
		general_Country_.hasMany(models.general_company_Company__address_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_company_Contact_, { foreignKey: "citizenship_"});
		general_Country_.hasMany(models.general_company_Contact_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_education_Campus__address_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_education_Faculty__address_, { foreignKey: "country_"});
		general_Country_.hasMany(models.general_event_CountryCategory__countries_, { foreignKey: "Country_"});
	};
return general_Country_


};
