/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_University_ =  sequelize.define('general_University_', {
    University_: {
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
      type: DataTypes.STRING(100),
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
    origname_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "url_"
    },
    erasmusCode_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usingMinerva_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bestUniversity_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastChange_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    localPhone_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    localFax_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    localEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    localAddress_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    internationalPhone_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    internationalFax_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    internationalEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    internationalAddress_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalNumberStudents_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalForeignStudents_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalMsb_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalPhd_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percentageTechnologyStudents_: {
      type: DataTypes.STRING(10),
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
    location_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University__location_',
        key: 'location_'
      }
    },
    creditStructure_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    selectClasses_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bolognaProcess_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    visible_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_University_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "University_" },
        ]
      },
      {
        name: "University_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "University_" },
        ]
      },
      {
        name: "url_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "url_" },
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
        name: "country_",
        using: "BTREE",
        fields: [
          { name: "country_" },
        ]
      },
      {
        name: "origname_",
        using: "BTREE",
        fields: [
          { name: "origname_" },
        ]
      },
      {
        name: "erasmusCode_",
        using: "BTREE",
        fields: [
          { name: "erasmusCode_" },
        ]
      },
      {
        name: "bestUniversity_",
        using: "BTREE",
        fields: [
          { name: "bestUniversity_" },
        ]
      },
      {
        name: "lastChange_",
        using: "BTREE",
        fields: [
          { name: "lastChange_" },
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
        name: "bolognaProcess_",
        using: "BTREE",
        fields: [
          { name: "bolognaProcess_" },
        ]
      },
      {
        name: "visible_",
        using: "BTREE",
        fields: [
          { name: "visible_" },
        ]
      },
      {
        name: "location_",
        using: "BTREE",
        fields: [
          { name: "location_" },
        ]
      },
      {
        name: "city_",
        using: "BTREE",
        fields: [
          { name: "city_" },
        ]
      },
    ]
  });
	general_University_.associate = models => {
		general_University_.hasMany(models.best_Student__education_, { foreignKey: "university_"});
		general_University_.hasMany(models.best_bcc_UniversityOffer_, { foreignKey: "university_"});
		general_University_.hasMany(models.best_bcc_UniversityOffer__allowedUniversities_, { foreignKey: "University_"});
		general_University_.hasMany(models.best_internal_Lbg_, { foreignKey: "university_"});
		general_University_.hasMany(models.best_local_Event__targetStudents_, { foreignKey: "University_"});
		general_University_.hasMany(models.best_minerva_CareerNewsletter__filter__university_, { foreignKey: "University__"});
		general_University_.hasMany(models.best_minerva_TrackableLink_, { foreignKey: "university_"});
		general_University_.hasMany(models.best_minerva_UniversityRepresentative_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_UniversityOffer_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_UniversityOffer__allowedUniversities_, { foreignKey: "University_"});
		general_University_.belongsTo(models.general_Country_, { foreignKey: "country_"});
		general_University_.belongsTo(models.general_Image_, { foreignKey: "logo_"});
		general_University_.belongsTo(models.general_University__location_, { foreignKey: "location_"});
		general_University_.hasMany(models.general_University__inNetworks_, { foreignKey: "University_"});
		general_University_.hasMany(models.general_company_CompanyRepresentative_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_education_Campus_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_education_Department_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_education_Exchange_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_education_Exchange__universities_, { foreignKey: "University_"});
		general_University_.hasMany(models.general_education_Faculty_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_education_Study_, { foreignKey: "university_"});
		general_University_.hasMany(models.general_event_Event__targetUniversities_, { foreignKey: "University_"});
	};
return general_University_


};
