/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CompanyRepresentative_ =  sequelize.define('best_minerva_CompanyRepresentative_', {
    CompanyRepresentative_: {
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
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    authentication_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Auth_',
        key: 'Auth_'
      }
    },
    company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    },
    function_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    streetno_: {
      type: DataTypes.STRING(60),
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
    fax_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    original_surname_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    original_name_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    original_email_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    original_homepage_: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CompanyRepresentative_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CompanyRepresentative_" },
        ]
      },
      {
        name: "CompanyRepresentative_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CompanyRepresentative_" },
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "authentication_",
        using: "BTREE",
        fields: [
          { name: "authentication_" },
        ]
      },
      {
        name: "company_",
        using: "BTREE",
        fields: [
          { name: "company_" },
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
        name: "phone_",
        using: "BTREE",
        fields: [
          { name: "phone_" },
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
        name: "original_surname_",
        using: "BTREE",
        fields: [
          { name: "original_surname_" },
        ]
      },
      {
        name: "original_name_",
        using: "BTREE",
        fields: [
          { name: "original_name_" },
        ]
      },
      {
        name: "original_email_",
        using: "BTREE",
        fields: [
          { name: "original_email_" },
        ]
      },
      {
        name: "original_homepage_",
        using: "BTREE",
        fields: [
          { name: "original_homepage_" },
        ]
      },
    ]
  });
	best_minerva_CompanyRepresentative_.associate = models => {
		best_minerva_CompanyRepresentative_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		best_minerva_CompanyRepresentative_.belongsTo(models.best_Auth_, { foreignKey: "authentication_"});
		best_minerva_CompanyRepresentative_.belongsTo(models.best_minerva_Company_, { foreignKey: "company_"});
		best_minerva_CompanyRepresentative_.belongsTo(models.general_Country_, { foreignKey: "country_"});
	};
return best_minerva_CompanyRepresentative_


};
