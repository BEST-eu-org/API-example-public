/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Company_ =  sequelize.define('general_company_Company_', {
    Company_: {
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
      type: DataTypes.STRING(80),
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    urlcareer_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    logourl_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hqstreet_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hqno_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hqzipcode_: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hqcity_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    hqcountry_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    resp_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bankname_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bankstreetno_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    bankcity_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    bankzipcode_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    bankcountry_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    bankiban_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bankbic_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    employerType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    address_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company__address_',
        key: 'address_'
      }
    },
    scale_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    motherCompany_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    bankAccount_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company__bankAccount_',
        key: 'bankAccount_'
      }
    },
    email_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    creationMethod_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    colloquialName_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aliases_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_Company_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
      {
        name: "Company_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Company_" },
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
        name: "employerType_",
        using: "BTREE",
        fields: [
          { name: "employerType_" },
        ]
      },
      {
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
      {
        name: "urlcareer_",
        using: "BTREE",
        fields: [
          { name: "urlcareer_" },
        ]
      },
      {
        name: "logourl_",
        using: "BTREE",
        fields: [
          { name: "logourl_" },
        ]
      },
      {
        name: "hqstreet_",
        using: "BTREE",
        fields: [
          { name: "hqstreet_" },
        ]
      },
      {
        name: "hqno_",
        using: "BTREE",
        fields: [
          { name: "hqno_" },
        ]
      },
      {
        name: "hqzipcode_",
        using: "BTREE",
        fields: [
          { name: "hqzipcode_" },
        ]
      },
      {
        name: "hqcity_",
        using: "BTREE",
        fields: [
          { name: "hqcity_" },
        ]
      },
      {
        name: "hqcountry_",
        using: "BTREE",
        fields: [
          { name: "hqcountry_" },
        ]
      },
      {
        name: "resp_",
        using: "BTREE",
        fields: [
          { name: "resp_" },
        ]
      },
      {
        name: "bankname_",
        using: "BTREE",
        fields: [
          { name: "bankname_" },
        ]
      },
      {
        name: "bankstreetno_",
        using: "BTREE",
        fields: [
          { name: "bankstreetno_" },
        ]
      },
      {
        name: "bankcity_",
        using: "BTREE",
        fields: [
          { name: "bankcity_" },
        ]
      },
      {
        name: "bankzipcode_",
        using: "BTREE",
        fields: [
          { name: "bankzipcode_" },
        ]
      },
      {
        name: "bankcountry_",
        using: "BTREE",
        fields: [
          { name: "bankcountry_" },
        ]
      },
      {
        name: "bankiban_",
        using: "BTREE",
        fields: [
          { name: "bankiban_" },
        ]
      },
      {
        name: "bankbic_",
        using: "BTREE",
        fields: [
          { name: "bankbic_" },
        ]
      },
      {
        name: "logo_",
        using: "BTREE",
        fields: [
          { name: "logo_" },
        ]
      },
      {
        name: "scale_",
        using: "BTREE",
        fields: [
          { name: "scale_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "motherCompany_",
        using: "BTREE",
        fields: [
          { name: "motherCompany_" },
        ]
      },
      {
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "email_",
        using: "BTREE",
        fields: [
          { name: "email_" },
        ]
      },
      {
        name: "creationMethod_",
        using: "BTREE",
        fields: [
          { name: "creationMethod_" },
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
        name: "address_",
        using: "BTREE",
        fields: [
          { name: "address_" },
        ]
      },
      {
        name: "bankAccount_",
        using: "BTREE",
        fields: [
          { name: "bankAccount_" },
        ]
      },
      {
        name: "colloquialName_",
        using: "BTREE",
        fields: [
          { name: "colloquialName_" },
        ]
      },
      {
        name: "aliases_",
        using: "BTREE",
        fields: [
          { name: "aliases_" },
        ]
      },
    ]
  });
	general_company_Company_.associate = models => {
		general_company_Company_.hasMany(models.best_local_Event__companies_, { foreignKey: "Company_"});
		general_company_Company_.hasMany(models.best_minerva_Company_, { foreignKey: "comp_"});
		general_company_Company_.hasMany(models.general_Person__employment_, { foreignKey: "company_"});
		general_company_Company_.hasMany(models.general_accounting_Transfer_, { foreignKey: "counterpartOrg_"});
		general_company_Company_.hasMany(models.general_company_Collaboration__obligations_, { foreignKey: "company_"});
		general_company_Company_.hasMany(models.general_company_CompanyRepresentative_, { foreignKey: "company_"});
		general_company_Company_.belongsTo(models.general_Country_, { foreignKey: "hqcountry_"});
		general_company_Company_.belongsTo(models.general_Person_, { foreignKey: "resp_"});
		general_company_Company_.belongsTo(models.general_Country_, { foreignKey: "bankcountry_"});
		general_company_Company_.belongsTo(models.general_Image_, { foreignKey: "logo_"});
		general_company_Company_.belongsTo(models.general_company_Company__address_, { foreignKey: "address_"});
		general_company_Company_.belongsTo(models.general_company_Company_, { foreignKey: "motherCompany_"});
		general_company_Company_.hasMany(models.general_company_Company_, { foreignKey: "motherCompany_"});
		general_company_Company_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		general_company_Company_.belongsTo(models.general_company_Company__bankAccount_, { foreignKey: "bankAccount_"});
		general_company_Company_.hasMany(models.general_company_Company__activityField_, { foreignKey: "Company_"});
		general_company_Company_.hasMany(models.general_company_Company__broadActivityField_, { foreignKey: "Company_"});
		general_company_Company_.hasMany(models.general_company_Company__changeLog_, { foreignKey: "Company_"});
		general_company_Company_.hasMany(models.general_company_Contact_, { foreignKey: "company_"});
		general_company_Company_.hasMany(models.general_company_Report_, { foreignKey: "company_"});
	};
return general_company_Company_


};
