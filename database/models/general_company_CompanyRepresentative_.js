/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_CompanyRepresentative_ =  sequelize.define('general_company_CompanyRepresentative_', {
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
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    function_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    creationMethod_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    address_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_CompanyRepresentative__address_',
        key: 'address_'
      }
    },
    educationalInvolvement_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    otherBackgroundInformation_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    curriculumVitae_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    },
    specialisationDescription_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    canBESTInform_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isBCCAdminAccount_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_CompanyRepresentative_',
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
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
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
        name: "creationMethod_",
        using: "BTREE",
        fields: [
          { name: "creationMethod_" },
        ]
      },
      {
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
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
        name: "curriculumVitae_",
        using: "BTREE",
        fields: [
          { name: "curriculumVitae_" },
        ]
      },
      {
        name: "canBESTInform_",
        using: "BTREE",
        fields: [
          { name: "canBESTInform_" },
        ]
      },
      {
        name: "isBCCAdminAccount_",
        using: "BTREE",
        fields: [
          { name: "isBCCAdminAccount_" },
        ]
      },
    ]
  });
	general_company_CompanyRepresentative_.associate = models => {
		general_company_CompanyRepresentative_.hasMany(models.best_bcc_UniversityOffer_, { foreignKey: "contactPerson_"});
		general_company_CompanyRepresentative_.hasMany(models.best_johnny_Activity__teachers_, { foreignKey: "teacher_"});
		general_company_CompanyRepresentative_.hasMany(models.best_minerva_Company__cvExports_, { foreignKey: "representative_"});
		general_company_CompanyRepresentative_.hasMany(models.best_minerva_Company__studentProfileViews_, { foreignKey: "representative_"});
		general_company_CompanyRepresentative_.hasMany(models.best_minerva_Student__companyViews_, { foreignKey: "representative_"});
		general_company_CompanyRepresentative_.hasMany(models.general_UniversityOffer_, { foreignKey: "contactPerson_"});
		general_company_CompanyRepresentative_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		general_company_CompanyRepresentative_.belongsTo(models.best_Auth_, { foreignKey: "authentication_"});
		general_company_CompanyRepresentative_.belongsTo(models.general_company_Company_, { foreignKey: "company_"});
		general_company_CompanyRepresentative_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		general_company_CompanyRepresentative_.belongsTo(models.general_University_, { foreignKey: "university_"});
		general_company_CompanyRepresentative_.belongsTo(models.general_company_CompanyRepresentative__address_, { foreignKey: "address_"});
		general_company_CompanyRepresentative_.belongsTo(models.general_archive_File_, { foreignKey: "curriculumVitae_"});
		general_company_CompanyRepresentative_.hasMany(models.general_company_CompanyRepresentative__changeLog_, { foreignKey: "CompanyRepresentative_"});
		general_company_CompanyRepresentative_.hasMany(models.general_company_ContactReport__companyRepresentative_, { foreignKey: "CompanyRepresentative__"});
	};
return general_company_CompanyRepresentative_


};
