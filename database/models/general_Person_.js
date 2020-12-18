/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Person_ =  sequelize.define('general_Person_', {
    Person_: {
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
    surname_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    email_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birthdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gender_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passportno_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    mobilePhone_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    icq_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    webpage_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    T_shirt_: {
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
    specialDiet_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    allergies_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    middleInitial_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    photo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    skype_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    sendingEmail_: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    otherContacts_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    maritalStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    previousSurname_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    children_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    photoThumbnail_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      },
      unique: "general_Person__ibfk_3"
    },
    photoMiniThumbnail_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      },
      unique: "general_Person__ibfk_4"
    },
    passportExpdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acceptedCreationTerms_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acceptedBASTerms_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acceptedBCCTerms_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acceptedPATerms_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Person_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Person_" },
        ]
      },
      {
        name: "Person_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Person_" },
        ]
      },
      {
        name: "photoThumbnail_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "photoThumbnail_" },
        ]
      },
      {
        name: "photoMiniThumbnail_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "photoMiniThumbnail_" },
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
        name: "email_",
        using: "BTREE",
        fields: [
          { name: "email_" },
        ]
      },
      {
        name: "birthdate_",
        using: "BTREE",
        fields: [
          { name: "birthdate_" },
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
        name: "passportno_",
        using: "BTREE",
        fields: [
          { name: "passportno_" },
        ]
      },
      {
        name: "icq_",
        using: "BTREE",
        fields: [
          { name: "icq_" },
        ]
      },
      {
        name: "webpage_",
        using: "BTREE",
        fields: [
          { name: "webpage_" },
        ]
      },
      {
        name: "T_shirt_",
        using: "BTREE",
        fields: [
          { name: "T_shirt_" },
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
        name: "middleInitial_",
        using: "BTREE",
        fields: [
          { name: "middleInitial_" },
        ]
      },
      {
        name: "photo_",
        using: "BTREE",
        fields: [
          { name: "photo_" },
        ]
      },
      {
        name: "mobilePhone_",
        using: "BTREE",
        fields: [
          { name: "mobilePhone_" },
        ]
      },
      {
        name: "skype_",
        using: "BTREE",
        fields: [
          { name: "skype_" },
        ]
      },
      {
        name: "sendingEmail_",
        using: "BTREE",
        fields: [
          { name: "sendingEmail_" },
        ]
      },
      {
        name: "otherContacts_",
        using: "BTREE",
        fields: [
          { name: "otherContacts_" },
        ]
      },
      {
        name: "maritalStatus_",
        using: "BTREE",
        fields: [
          { name: "maritalStatus_" },
        ]
      },
      {
        name: "previousSurname_",
        using: "BTREE",
        fields: [
          { name: "previousSurname_" },
        ]
      },
      {
        name: "children_",
        using: "BTREE",
        fields: [
          { name: "children_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "passportExpdate_",
        using: "BTREE",
        fields: [
          { name: "passportExpdate_" },
        ]
      },
      {
        name: "acceptedCreationTerms_",
        using: "BTREE",
        fields: [
          { name: "acceptedCreationTerms_" },
        ]
      },
      {
        name: "acceptedBASTerms_",
        using: "BTREE",
        fields: [
          { name: "acceptedBASTerms_" },
        ]
      },
      {
        name: "acceptedBCCTerms_",
        using: "BTREE",
        fields: [
          { name: "acceptedBCCTerms_" },
        ]
      },
      {
        name: "acceptedPATerms_",
        using: "BTREE",
        fields: [
          { name: "acceptedPATerms_" },
        ]
      },
    ]
  });
	general_Person_.associate = models => {
		general_Person_.hasMany(models.best_Student_, { foreignKey: "person_"});
		general_Person_.hasMany(models.best_guide_CityGuide__comments_, { foreignKey: "who_"});
		general_Person_.hasMany(models.best_helpdesk_Reply_, { foreignKey: "sender_"});
		general_Person_.hasMany(models.best_helpdesk_Request_, { foreignKey: "sender_"});
		general_Person_.hasMany(models.best_internal_Anniversary_, { foreignKey: "lastEditor_"});
		general_Person_.hasMany(models.best_internal_Event_, { foreignKey: "coordinator_"});
		general_Person_.hasMany(models.best_internal_Lbg_, { foreignKey: "president_"});
		general_Person_.hasMany(models.best_internal_Lbg_, { foreignKey: "doctor_"});
		general_Person_.hasMany(models.best_internal_Lbg__membershipHistory_, { foreignKey: "doctor_"});
		general_Person_.hasMany(models.best_internal_RefundRequest_, { foreignKey: "requestor_"});
		general_Person_.hasMany(models.best_internal_Region__regionalAdvisors_, { foreignKey: "regionalAdvisor_"});
		general_Person_.hasMany(models.best_internal_eec_competition_Task_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.best_internal_eec_competition_Task__comments_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.best_internal_hrtool_Team__hrPersons_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.best_internal_hrtool_Team__members_, { foreignKey: "mentor_"});
		general_Person_.hasMany(models.best_internal_itc_RuDiana_, { foreignKey: "person_"});
		general_Person_.hasOne(models.best_internal_itc_User_, { foreignKey: "person_"});
		general_Person_.hasMany(models.best_internal_tigro_Games__ratings_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.best_internal_tigro_SurveyAnswers_, { foreignKey: "person_"});
		general_Person_.hasMany(models.best_internal_training_Call_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.best_internal_training_Concept__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.best_internal_training_Concept__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.best_internal_training_Session_, { foreignKey: "createdBy_"});
		general_Person_.hasMany(models.best_internal_training_Session_, { foreignKey: "lastUpdatedBy_"});
		general_Person_.hasMany(models.best_internal_training_Session__participants_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.best_internal_training_Trainer_, { foreignKey: "person_"});
		general_Person_.hasMany(models.best_johnny_Activity__materials_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.best_johnny_Application__comments_, { foreignKey: "person_"});
		general_Person_.hasMany(models.best_minerva_CareerNewsletter_, { foreignKey: "submitter_"});
		general_Person_.hasMany(models.best_minerva_CompanyRepresentative_, { foreignKey: "person_"});
		general_Person_.hasMany(models.best_minerva_UniversityRepresentative_, { foreignKey: "person_"});
		general_Person_.hasMany(models.general_Image_, { foreignKey: "owner_"});
		general_Person_.belongsTo(models.general_Country_, { foreignKey: "citizenship_"});
		general_Person_.belongsTo(models.general_Image_, { foreignKey: "photo_"});
		general_Person_.belongsTo(models.general_Image_, { foreignKey: "photoThumbnail_"});
		general_Person_.belongsTo(models.general_Image_, { foreignKey: "photoMiniThumbnail_"});
		general_Person_.hasMany(models.general_Person__address_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_Person__employment_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_Project_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_Session_, { foreignKey: "person_"});
		general_Person_.hasMany(models.general_Team__administrators_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_Team__coordinators_, { foreignKey: "member_"});
		general_Person_.hasMany(models.general_Team__formerCoordinators_, { foreignKey: "member_"});
		general_Person_.hasMany(models.general_Team__formerMembers_, { foreignKey: "member_"});
		general_Person_.hasMany(models.general_Team__members_, { foreignKey: "member_"});
		general_Person_.hasMany(models.general_Topic_, { foreignKey: "responsiblePerson_"});
		general_Person_.hasMany(models.general_WebNews_, { foreignKey: "author_"});
		general_Person_.hasMany(models.general_WebNews__comments_, { foreignKey: "submittedBy__"});
		general_Person_.hasMany(models.general_Wiki__history_, { foreignKey: "author_"});
		general_Person_.hasMany(models.general_accounting_Budget_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_accounting_Transfer_, { foreignKey: "counterpartPerson_"});
		general_Person_.hasMany(models.general_archive_Archive__administrators_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_archive_Document_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.general_archive_Document__authors_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_archive_Document__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.general_archive_Document__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_archive_Document__comments_, { foreignKey: "who_"});
		general_Person_.hasMany(models.general_archive_Email_, { foreignKey: "fromPerson_"});
		general_Person_.hasMany(models.general_archive_Email__ccPersons_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_archive_Email__toPersons_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_archive_FileVersion_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.general_archive_File_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.general_archive_File__authors_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_archive_Folder__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.general_archive_Folder__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_company_Collaboration__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.general_company_Collaboration__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_company_Collaboration__obligations_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_company_CompanyRepresentative_, { foreignKey: "person_"});
		general_Person_.hasMany(models.general_company_CompanyRepresentative__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.general_company_CompanyRepresentative__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_company_Company_, { foreignKey: "resp_"});
		general_Person_.hasMany(models.general_company_Company__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.general_company_Company__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_company_ContactReport_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.general_company_ContactReport__changeLog_, { foreignKey: "changedBy_"});
		general_Person_.hasMany(models.general_company_ContactReport__changeLog_, { foreignKey: "responsible_"});
		general_Person_.hasMany(models.general_company_Report_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.general_event_Application_, { foreignKey: "applicant_"});
		general_Person_.hasMany(models.general_event_Application__answers_, { foreignKey: "person_"});
		general_Person_.hasMany(models.general_event_Application__comments_, { foreignKey: "person_"});
		general_Person_.hasMany(models.general_event_Event__mainOrganisers_, { foreignKey: "Person_"});
		general_Person_.hasMany(models.general_event_Event__organisers_, { foreignKey: "organiser_"});
		general_Person_.hasMany(models.general_event_Team_, { foreignKey: "owner_"});
		general_Person_.hasMany(models.general_event_Team__members_, { foreignKey: "member_"});
		general_Person_.hasMany(models.general_forum_Notification_, { foreignKey: "createdBy_"});
		general_Person_.hasMany(models.general_forum_Post_, { foreignKey: "createdBy_"});
		general_Person_.hasMany(models.general_forum_Post__opinions_, { foreignKey: "submittedBy_"});
		general_Person_.hasMany(models.general_forum_Thread_, { foreignKey: "createdBy_"});
		general_Person_.hasMany(models.general_survey_Response_, { foreignKey: "respondent_"});
	};
return general_Person_


};
