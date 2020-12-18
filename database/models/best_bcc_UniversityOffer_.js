/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_bcc_UniversityOffer_ =  sequelize.define('best_bcc_UniversityOffer_', {
    UniversityOffer_: {
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
    title_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortDesc_: {
      type: DataTypes.TEXT,
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
    faculty_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Faculty_',
        key: 'Faculty_'
      }
    },
    department_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Department_',
        key: 'Department_'
      }
    },
    location_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    studyField_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalFee_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scholarship_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    startDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    credits_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contactPerson_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_CompanyRepresentative_',
        key: 'CompanyRepresentative_'
      }
    },
    admissionCriteria_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    applicationDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    admissionProcedure_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admissionURL_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_bcc_UniversityOffer_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UniversityOffer_" },
        ]
      },
      {
        name: "UniversityOffer_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UniversityOffer_" },
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
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
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
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
      {
        name: "faculty_",
        using: "BTREE",
        fields: [
          { name: "faculty_" },
        ]
      },
      {
        name: "department_",
        using: "BTREE",
        fields: [
          { name: "department_" },
        ]
      },
      {
        name: "totalFee_",
        using: "BTREE",
        fields: [
          { name: "totalFee_" },
        ]
      },
      {
        name: "scholarship_",
        using: "BTREE",
        fields: [
          { name: "scholarship_" },
        ]
      },
      {
        name: "startDate_",
        using: "BTREE",
        fields: [
          { name: "startDate_" },
        ]
      },
      {
        name: "endDate_",
        using: "BTREE",
        fields: [
          { name: "endDate_" },
        ]
      },
      {
        name: "credits_",
        using: "BTREE",
        fields: [
          { name: "credits_" },
        ]
      },
      {
        name: "contactPerson_",
        using: "BTREE",
        fields: [
          { name: "contactPerson_" },
        ]
      },
      {
        name: "applicationDeadline_",
        using: "BTREE",
        fields: [
          { name: "applicationDeadline_" },
        ]
      },
      {
        name: "admissionURL_",
        using: "BTREE",
        fields: [
          { name: "admissionURL_" },
        ]
      },
    ]
  });
	best_bcc_UniversityOffer_.associate = models => {
		best_bcc_UniversityOffer_.belongsTo(models.general_University_, { foreignKey: "university_"});
		best_bcc_UniversityOffer_.belongsTo(models.general_education_Faculty_, { foreignKey: "faculty_"});
		best_bcc_UniversityOffer_.belongsTo(models.general_education_Department_, { foreignKey: "department_"});
		best_bcc_UniversityOffer_.belongsTo(models.general_company_CompanyRepresentative_, { foreignKey: "contactPerson_"});
		best_bcc_UniversityOffer_.hasMany(models.best_bcc_UniversityOffer__allowedLanguages_, { foreignKey: "UniversityOffer_"});
		best_bcc_UniversityOffer_.hasMany(models.best_bcc_UniversityOffer__allowedUniversities_, { foreignKey: "UniversityOffer_"});
		best_bcc_UniversityOffer_.hasMany(models.best_bcc_UniversityOffer__studyField_, { foreignKey: "UniversityOffer_"});
	};
return best_bcc_UniversityOffer_


};
