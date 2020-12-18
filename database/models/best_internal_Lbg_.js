/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Lbg_ =  sequelize.define('best_internal_Lbg_', {
    Lbg_: {
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
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    members_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    name_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    id_: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    iname_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    iname2_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    logourl_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    phone_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    phone2_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    fax_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    office_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    snail_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vivaldiPostersSpring_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vivaldiPostersSummer_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vivaldiPostersWinter_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    johnnyPassword_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    johnnyValidationModel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastseen_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    univeng_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    univurl_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    univloc_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inEU_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presidentName_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    presidentEmail_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    johnnyLocalIdQuestion_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    vivaldiSendingAllowed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    president_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    logo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    latitude_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    longitude_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    diskSpace_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    johnnyLocalValidationInformation_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_address_City_',
        key: 'City_'
      }
    },
    companyDatabaseQuota_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    companyDatabaseQuotaUsed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ftpQuota_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ftpQuotaUsed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    archiveQuota_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    archiveQuotaUsed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lbgHistory_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guideRights_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nurse_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    shortname_: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    doctor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    legalEntityForm_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    legalEntityName_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    legalEntityNumber_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    legalEntityVat_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    legalEntityUrl_: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Lbg_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
        ]
      },
      {
        name: "Lbg_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
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
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
      {
        name: "members_",
        using: "BTREE",
        fields: [
          { name: "members_" },
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
        name: "id_",
        using: "BTREE",
        fields: [
          { name: "id_" },
        ]
      },
      {
        name: "iname_",
        using: "BTREE",
        fields: [
          { name: "iname_" },
        ]
      },
      {
        name: "iname2_",
        using: "BTREE",
        fields: [
          { name: "iname2_" },
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
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
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
        name: "phone2_",
        using: "BTREE",
        fields: [
          { name: "phone2_" },
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
        name: "vivaldiPostersSpring_",
        using: "BTREE",
        fields: [
          { name: "vivaldiPostersSpring_" },
        ]
      },
      {
        name: "vivaldiPostersSummer_",
        using: "BTREE",
        fields: [
          { name: "vivaldiPostersSummer_" },
        ]
      },
      {
        name: "vivaldiPostersWinter_",
        using: "BTREE",
        fields: [
          { name: "vivaldiPostersWinter_" },
        ]
      },
      {
        name: "johnnyLocalIdQuestion_",
        using: "BTREE",
        fields: [
          { name: "johnnyLocalIdQuestion_" },
        ]
      },
      {
        name: "johnnyValidationModel_",
        using: "BTREE",
        fields: [
          { name: "johnnyValidationModel_" },
        ]
      },
      {
        name: "lastseen_",
        using: "BTREE",
        fields: [
          { name: "lastseen_" },
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
        name: "president_",
        using: "BTREE",
        fields: [
          { name: "president_" },
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
        name: "latitude_",
        using: "BTREE",
        fields: [
          { name: "latitude_" },
        ]
      },
      {
        name: "longitude_",
        using: "BTREE",
        fields: [
          { name: "longitude_" },
        ]
      },
      {
        name: "diskSpace_",
        using: "BTREE",
        fields: [
          { name: "diskSpace_" },
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
        name: "companyDatabaseQuota_",
        using: "BTREE",
        fields: [
          { name: "companyDatabaseQuota_" },
        ]
      },
      {
        name: "companyDatabaseQuotaUsed_",
        using: "BTREE",
        fields: [
          { name: "companyDatabaseQuotaUsed_" },
        ]
      },
      {
        name: "nurse_",
        using: "BTREE",
        fields: [
          { name: "nurse_" },
        ]
      },
      {
        name: "guideRights_",
        using: "BTREE",
        fields: [
          { name: "guideRights_" },
        ]
      },
      {
        name: "ftpQuota_",
        using: "BTREE",
        fields: [
          { name: "ftpQuota_" },
        ]
      },
      {
        name: "ftpQuotaUsed_",
        using: "BTREE",
        fields: [
          { name: "ftpQuotaUsed_" },
        ]
      },
      {
        name: "archiveQuota_",
        using: "BTREE",
        fields: [
          { name: "archiveQuota_" },
        ]
      },
      {
        name: "archiveQuotaUsed_",
        using: "BTREE",
        fields: [
          { name: "archiveQuotaUsed_" },
        ]
      },
      {
        name: "shortname_",
        using: "BTREE",
        fields: [
          { name: "shortname_" },
        ]
      },
      {
        name: "doctor_",
        using: "BTREE",
        fields: [
          { name: "doctor_" },
        ]
      },
      {
        name: "legalEntityForm_",
        using: "BTREE",
        fields: [
          { name: "legalEntityForm_" },
        ]
      },
      {
        name: "legalEntityName_",
        using: "BTREE",
        fields: [
          { name: "legalEntityName_" },
        ]
      },
      {
        name: "legalEntityNumber_",
        using: "BTREE",
        fields: [
          { name: "legalEntityNumber_" },
        ]
      },
      {
        name: "legalEntityVat_",
        using: "BTREE",
        fields: [
          { name: "legalEntityVat_" },
        ]
      },
      {
        name: "legalEntityUrl_",
        using: "BTREE",
        fields: [
          { name: "legalEntityUrl_" },
        ]
      },
    ]
  });
	best_internal_Lbg_.associate = models => {
		best_internal_Lbg_.hasMany(models.best_Auth__codes_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Anniversary_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_LbgApplication_, { foreignKey: "applicantLbg_"});
		best_internal_Lbg_.belongsTo(models.general_University_, { foreignKey: "university_"});
		best_internal_Lbg_.belongsTo(models.general_Team_, { foreignKey: "members_"});
		best_internal_Lbg_.belongsTo(models.general_Person_, { foreignKey: "president_"});
		best_internal_Lbg_.belongsTo(models.general_Image_, { foreignKey: "logo_"});
		best_internal_Lbg_.belongsTo(models.general_address_City_, { foreignKey: "city_"});
		best_internal_Lbg_.belongsTo(models.best_internal_Lbg_, { foreignKey: "nurse_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg_, { foreignKey: "nurse_"});
		best_internal_Lbg_.belongsTo(models.general_Person_, { foreignKey: "doctor_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg__johnnySettings_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg__mailingLists_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg__membershipHistory_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg__membershipHistory_, { foreignKey: "nurse_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg__socialNetwork_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Lbg__vivaldiCodes_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Region__lbgs_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Student_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_Student__guest_, { foreignKey: "guestLbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_board_Board_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_itc_Server_, { foreignKey: "location_"});
		best_internal_Lbg_.hasMany(models.best_internal_prop_ProductOrder_, { foreignKey: "orderedByLbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_tasklist_TaskList__lbg_, { foreignKey: "Lbg__"});
		best_internal_Lbg_.hasMany(models.best_internal_training_Call__lbg_, { foreignKey: "Lbg__"});
		best_internal_Lbg_.hasMany(models.best_internal_vote_Round__comments_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_vote_Round__votes_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_vote_Round__votingLBGs_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_vote_Round__withdraws_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_vote_Sequence__votes_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_internal_vote_Session__votingLBGs_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_johnny_Activity_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.best_johnny_Activity__hosts_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_johnny_Application_, { foreignKey: "sendingLBG_"});
		best_internal_Lbg_.hasMany(models.best_johnny_Student_, { foreignKey: "validatingLBG_"});
		best_internal_Lbg_.hasMany(models.best_local_Event_, { foreignKey: "host_"});
		best_internal_Lbg_.hasMany(models.best_local_Event__targetLBGs_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.best_minerva_Company__searchLBGs_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.general_Project_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.general_accounting_Transfer_, { foreignKey: "counterpartLbg_"});
		best_internal_Lbg_.hasMany(models.general_archive_File_, { foreignKey: "authorLbg_"});
		best_internal_Lbg_.hasMany(models.general_company_CompanyRepresentative_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.general_company_Company_, { foreignKey: "lbg_"});
		best_internal_Lbg_.hasMany(models.general_event_Event__organisingLBGs_, { foreignKey: "Lbg_"});
		best_internal_Lbg_.hasMany(models.general_survey_Response_, { foreignKey: "responseOfLbg_"});
	};
return best_internal_Lbg_


};
