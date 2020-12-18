/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Student_ =  sequelize.define('best_internal_Student_', {
    Student_: {
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
    student__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
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
    account_active_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bestNickname_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    worstNickname_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bestStarted_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bestInvolvement_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    negotiated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    motherTongue_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phone1_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone2_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    university_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    studyStarted_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    studyFinishing_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    studyField_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    studyKind_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isAlumnus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alumniMessage_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    alumniCity_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    alumniCompany_: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    alumniWorkField_: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    alumniWorkPhone_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alumniWorkFax_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uid_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastlogin_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actuallogin_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    alumniWork_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paTheme_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alumniSince_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    partner_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    welcomePageView_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    personalProfileView_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    welcomePageBoxes_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bestmail_: {
      type: DataTypes.STRING(150),
      allowNull: true,
      unique: "bestmail_"
    },
    iban_: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    bic_: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    address_refund_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Student_',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "Student_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "bestmail_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bestmail_" },
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
        name: "student__",
        using: "BTREE",
        fields: [
          { name: "student__" },
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
        name: "lastlogin_",
        using: "BTREE",
        fields: [
          { name: "lastlogin_" },
        ]
      },
      {
        name: "actuallogin_",
        using: "BTREE",
        fields: [
          { name: "actuallogin_" },
        ]
      },
      {
        name: "account_active_",
        using: "BTREE",
        fields: [
          { name: "account_active_" },
        ]
      },
      {
        name: "bestNickname_",
        using: "BTREE",
        fields: [
          { name: "bestNickname_" },
        ]
      },
      {
        name: "worstNickname_",
        using: "BTREE",
        fields: [
          { name: "worstNickname_" },
        ]
      },
      {
        name: "bestStarted_",
        using: "BTREE",
        fields: [
          { name: "bestStarted_" },
        ]
      },
      {
        name: "negotiated_",
        using: "BTREE",
        fields: [
          { name: "negotiated_" },
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
        name: "motherTongue_",
        using: "BTREE",
        fields: [
          { name: "motherTongue_" },
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
        name: "phone1_",
        using: "BTREE",
        fields: [
          { name: "phone1_" },
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
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
      {
        name: "studyStarted_",
        using: "BTREE",
        fields: [
          { name: "studyStarted_" },
        ]
      },
      {
        name: "studyFinishing_",
        using: "BTREE",
        fields: [
          { name: "studyFinishing_" },
        ]
      },
      {
        name: "studyField_",
        using: "BTREE",
        fields: [
          { name: "studyField_" },
        ]
      },
      {
        name: "studyKind_",
        using: "BTREE",
        fields: [
          { name: "studyKind_" },
        ]
      },
      {
        name: "isAlumnus_",
        using: "BTREE",
        fields: [
          { name: "isAlumnus_" },
        ]
      },
      {
        name: "uid_",
        using: "BTREE",
        fields: [
          { name: "uid_" },
        ]
      },
      {
        name: "paTheme_",
        using: "BTREE",
        fields: [
          { name: "paTheme_" },
        ]
      },
      {
        name: "alumniSince_",
        using: "BTREE",
        fields: [
          { name: "alumniSince_" },
        ]
      },
      {
        name: "partner_",
        using: "BTREE",
        fields: [
          { name: "partner_" },
        ]
      },
      {
        name: "welcomePageView_",
        using: "BTREE",
        fields: [
          { name: "welcomePageView_" },
        ]
      },
      {
        name: "personalProfileView_",
        using: "BTREE",
        fields: [
          { name: "personalProfileView_" },
        ]
      },
      {
        name: "iban_",
        using: "BTREE",
        fields: [
          { name: "iban_" },
        ]
      },
      {
        name: "bic_",
        using: "BTREE",
        fields: [
          { name: "bic_" },
        ]
      },
    ]
  });
	best_internal_Student_.associate = models => {
		best_internal_Student_.hasMany(models.best_Idea_, { foreignKey: "originalAuthor_"});
		best_internal_Student_.hasMany(models.best_Idea_, { foreignKey: "responsible_"});
		best_internal_Student_.hasMany(models.best_Idea_, { foreignKey: "submittedBy_"});
		best_internal_Student_.hasMany(models.best_contactdb_Contact__contactPersons_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_contactdb_Contact__events__person_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_contactdb_Contact__offersExchanged_, { foreignKey: "offerSubmittedBy_"});
		best_internal_Student_.hasMany(models.best_helpdesk_Faq_, { foreignKey: "author_"});
		best_internal_Student_.hasMany(models.best_helpdesk_Solver_, { foreignKey: "solver__"});
		best_internal_Student_.hasMany(models.best_internal_Debt_, { foreignKey: "debitor_"});
		best_internal_Student_.hasMany(models.best_internal_Debt_, { foreignKey: "receiver_"});
		best_internal_Student_.belongsTo(models.best_Student_, { foreignKey: "student__"});
		best_internal_Student_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		best_internal_Student_.belongsTo(models.best_internal_Student_, { foreignKey: "partner_"});
		best_internal_Student_.hasMany(models.best_internal_Student_, { foreignKey: "partner_"});
		best_internal_Student_.hasMany(models.best_internal_Student__gameList_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_internal_Student__guest_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_internal_Student__myLinks_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_internal_Student__skills_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_internal_Student__statusHistory_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_internal_board_Position_, { foreignKey: "person_"});
		best_internal_Student_.hasMany(models.best_internal_hrtool_Team__members_, { foreignKey: "member_"});
		best_internal_Student_.hasMany(models.best_internal_ipp_Project_, { foreignKey: "coordinator_"});
		best_internal_Student_.hasMany(models.best_internal_prop_ProductOrder_, { foreignKey: "orderedByPerson_"});
		best_internal_Student_.hasMany(models.best_internal_tasklist_Task_, { foreignKey: "Responsible_"});
		best_internal_Student_.hasMany(models.best_internal_tasklist_Task_, { foreignKey: "SubmittedBy_"});
		best_internal_Student_.hasMany(models.best_internal_tasklist_Task__Comments_, { foreignKey: "SubmittedBy_"});
		best_internal_Student_.hasMany(models.best_internal_tasklist_Task__involvedPeople_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_internal_tigro_Games_, { foreignKey: "submitter_"});
		best_internal_Student_.hasMany(models.best_internal_tigro_Games__comments_, { foreignKey: "submittedBy_"});
		best_internal_Student_.hasMany(models.best_internal_tigro_Tiger_, { foreignKey: "bestie_"});
		best_internal_Student_.hasMany(models.best_internal_vote_Round__comments_, { foreignKey: "delegate_"});
		best_internal_Student_.hasMany(models.best_internal_vote_Round__votes_, { foreignKey: "delegate_"});
		best_internal_Student_.hasMany(models.best_internal_vote_Round__withdraws_, { foreignKey: "delegate_"});
		best_internal_Student_.hasMany(models.best_internal_vote_Sequence__votes_, { foreignKey: "delegate_"});
		best_internal_Student_.hasMany(models.best_internal_vote_Session__votingLBGs__delegates_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.best_johnny_Activity_, { foreignKey: "responsible_"});
		best_internal_Student_.hasMany(models.best_johnny_Activity_, { foreignKey: "grapResponsible_"});
		best_internal_Student_.hasMany(models.best_johnny_Activity__organisers_, { foreignKey: "organiser_"});
		best_internal_Student_.hasMany(models.best_johnny_Season_, { foreignKey: "coordinator_"});
		best_internal_Student_.hasMany(models.best_local_Event_, { foreignKey: "submittedBy_"});
		best_internal_Student_.hasMany(models.best_minerva_TrackableLink_, { foreignKey: "createdBy_"});
		best_internal_Student_.hasMany(models.general_Availability_, { foreignKey: "student_"});
		best_internal_Student_.hasMany(models.general_Contact__comments_, { foreignKey: "commentSubmittedBy_"});
		best_internal_Student_.hasMany(models.general_Project__responsibles_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.general_WebNews_, { foreignKey: "who_approved_"});
		best_internal_Student_.hasMany(models.general_WebNews__comments_, { foreignKey: "SubmittedBy_"});
		best_internal_Student_.hasMany(models.general_archive_Folder_, { foreignKey: "responsible_"});
		best_internal_Student_.hasMany(models.general_company_Collaboration_, { foreignKey: "responsible_"});
		best_internal_Student_.hasMany(models.general_company_ContactReport__bestMembers_, { foreignKey: "Student_"});
		best_internal_Student_.hasMany(models.general_survey_Survey__owner_, { foreignKey: "Student_"});
	};
return best_internal_Student_


};
