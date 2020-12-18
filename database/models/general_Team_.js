/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Team_ =  sequelize.define('general_Team_', {
    Team_: {
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
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mail_type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mail_listNameInSubject_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mail_ReplyTo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    policyJoin_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    policyLeave_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    archiveStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mail_bounces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    canPostToSuperGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    footerDisplay_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    footer_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maxAttachmentSize_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Team_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
      {
        name: "Team_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Team_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "mail_type_",
        using: "BTREE",
        fields: [
          { name: "mail_type_" },
        ]
      },
      {
        name: "mail_listNameInSubject_",
        using: "BTREE",
        fields: [
          { name: "mail_listNameInSubject_" },
        ]
      },
      {
        name: "mail_ReplyTo_",
        using: "BTREE",
        fields: [
          { name: "mail_ReplyTo_" },
        ]
      },
      {
        name: "policyJoin_",
        using: "BTREE",
        fields: [
          { name: "policyJoin_" },
        ]
      },
      {
        name: "policyLeave_",
        using: "BTREE",
        fields: [
          { name: "policyLeave_" },
        ]
      },
      {
        name: "archiveStatus_",
        using: "BTREE",
        fields: [
          { name: "archiveStatus_" },
        ]
      },
      {
        name: "mail_bounces_",
        using: "BTREE",
        fields: [
          { name: "mail_bounces_" },
        ]
      },
      {
        name: "canPostToSuperGroup_",
        using: "BTREE",
        fields: [
          { name: "canPostToSuperGroup_" },
        ]
      },
      {
        name: "maxAttachmentSize_",
        using: "BTREE",
        fields: [
          { name: "maxAttachmentSize_" },
        ]
      },
      {
        name: "footerDisplay_",
        using: "BTREE",
        fields: [
          { name: "footerDisplay_" },
        ]
      },
    ]
  });
	general_Team_.associate = models => {
		general_Team_.hasMany(models.best_alumni_WelcomeMessage_, { foreignKey: "cc_"});
		general_Team_.hasMany(models.best_internal_Lbg_, { foreignKey: "members_"});
		general_Team_.hasMany(models.best_internal_Lbg__mailingLists_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.best_internal_board_Board_, { foreignKey: "team_"});
		general_Team_.hasMany(models.best_internal_hrtool_Team_, { foreignKey: "hrTeam_"});
		general_Team_.hasMany(models.best_internal_hrtool_Team__mailingLists_, { foreignKey: "Team__"});
		general_Team_.hasMany(models.best_internal_hrtool_Team__projectMailingLists_, { foreignKey: "Team__"});
		general_Team_.hasMany(models.best_internal_tasklist_TaskList_, { foreignKey: "team_"});
		general_Team_.hasMany(models.best_wiki_Namespace_, { foreignKey: "team_"});
		general_Team_.hasMany(models.general_Project_, { foreignKey: "team_"});
		general_Team_.hasMany(models.general_Project__teams_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__administratorGroups_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__administratorGroups_, { foreignKey: "Team__"});
		general_Team_.hasMany(models.general_Team__administrators_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__aliases_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__coordinators_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__formerCoordinators_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__formerMembers_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__members_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__subgroups_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__subgroups_, { foreignKey: "Team__"});
		general_Team_.hasMany(models.general_Team__supergroups_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_Team__supergroups_, { foreignKey: "Team__"});
		general_Team_.hasMany(models.general_Topic_, { foreignKey: "responsibleGroup_"});
		general_Team_.hasMany(models.general_WebNewsLocation_, { foreignKey: "team_"});
		general_Team_.hasMany(models.general_Wiki_, { foreignKey: "editors_"});
		general_Team_.hasMany(models.general_archive_Archive_, { foreignKey: "owner_"});
		general_Team_.hasMany(models.general_archive_Email_, { foreignKey: "fromTeam_"});
		general_Team_.hasMany(models.general_archive_Email__allReceivingTeams_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_archive_Email__ccTeams_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_archive_Email__toTeams_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_event_Event__applicationReviewTeams_, { foreignKey: "team_"});
		general_Team_.hasMany(models.general_survey_Survey__responseAllowedToTeams_, { foreignKey: "Team_"});
		general_Team_.hasMany(models.general_survey_Survey__viewableBy_, { foreignKey: "Team_"});
	};
return general_Team_


};
