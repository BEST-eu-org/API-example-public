/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_UniversityOffer_ =  sequelize.define('general_UniversityOffer_', {
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
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortDesc_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location_: {
      type: DataTypes.TEXT,
      allowNull: true
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
    credits_: {
      type: DataTypes.STRING(255),
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
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_UniversityOffer_',
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
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
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
        name: "credits_",
        using: "BTREE",
        fields: [
          { name: "credits_" },
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
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
    ]
  });
	general_UniversityOffer_.associate = models => {
		general_UniversityOffer_.belongsTo(models.general_University_, { foreignKey: "university_"});
		general_UniversityOffer_.belongsTo(models.general_education_Faculty_, { foreignKey: "faculty_"});
		general_UniversityOffer_.belongsTo(models.general_education_Department_, { foreignKey: "department_"});
		general_UniversityOffer_.belongsTo(models.general_company_CompanyRepresentative_, { foreignKey: "contactPerson_"});
		general_UniversityOffer_.hasMany(models.general_UniversityOffer__allowedLanguages_, { foreignKey: "UniversityOffer_"});
		general_UniversityOffer_.hasMany(models.general_UniversityOffer__allowedUniversities_, { foreignKey: "UniversityOffer_"});
		general_UniversityOffer_.hasMany(models.general_UniversityOffer__studyField_, { foreignKey: "UniversityOffer_"});
	};
return general_UniversityOffer_


};
