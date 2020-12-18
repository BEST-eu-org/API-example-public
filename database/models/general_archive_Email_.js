/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Email_ =  sequelize.define('general_archive_Email_', {
    Email_: {
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
    fromText_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fromPerson_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    fromTeam_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    fromUnidentified_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    replyToEmailAddress_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    toText_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    toUnidentified_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ccText_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ccUnidentified_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sendingDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subject_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contentLength_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    charset_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    originalMail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    messageId_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inReplyToMessage_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Email_',
        key: 'Email_'
      }
    },
    threadRoot_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Email_',
        key: 'Email_'
      }
    },
    threadPath_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    threadLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inReplyTo_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    threadTopic_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    threadIndex_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    threadIndexDecoded_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mailType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hidden_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasAttachments_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spamLevel_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_archive_Email_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Email_" },
        ]
      },
      {
        name: "Email_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Email_" },
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
        name: "fromText_",
        using: "BTREE",
        fields: [
          { name: "fromText_" },
        ]
      },
      {
        name: "fromPerson_",
        using: "BTREE",
        fields: [
          { name: "fromPerson_" },
        ]
      },
      {
        name: "fromTeam_",
        using: "BTREE",
        fields: [
          { name: "fromTeam_" },
        ]
      },
      {
        name: "fromUnidentified_",
        using: "BTREE",
        fields: [
          { name: "fromUnidentified_" },
        ]
      },
      {
        name: "replyToEmailAddress_",
        using: "BTREE",
        fields: [
          { name: "replyToEmailAddress_" },
        ]
      },
      {
        name: "sendingDate_",
        using: "BTREE",
        fields: [
          { name: "sendingDate_" },
        ]
      },
      {
        name: "contentLength_",
        using: "BTREE",
        fields: [
          { name: "contentLength_" },
        ]
      },
      {
        name: "charset_",
        using: "BTREE",
        fields: [
          { name: "charset_" },
        ]
      },
      {
        name: "inReplyToMessage_",
        using: "BTREE",
        fields: [
          { name: "inReplyToMessage_" },
        ]
      },
      {
        name: "threadRoot_",
        using: "BTREE",
        fields: [
          { name: "threadRoot_" },
        ]
      },
      {
        name: "threadLevel_",
        using: "BTREE",
        fields: [
          { name: "threadLevel_" },
        ]
      },
      {
        name: "threadTopic_",
        using: "BTREE",
        fields: [
          { name: "threadTopic_" },
        ]
      },
      {
        name: "threadIndex_",
        using: "BTREE",
        fields: [
          { name: "threadIndex_" },
        ]
      },
      {
        name: "threadIndexDecoded_",
        using: "BTREE",
        fields: [
          { name: "threadIndexDecoded_" },
        ]
      },
      {
        name: "mailType_",
        using: "BTREE",
        fields: [
          { name: "mailType_" },
        ]
      },
      {
        name: "hidden_",
        using: "BTREE",
        fields: [
          { name: "hidden_" },
        ]
      },
      {
        name: "hasAttachments_",
        using: "BTREE",
        fields: [
          { name: "hasAttachments_" },
        ]
      },
      {
        name: "spamLevel_",
        using: "BTREE",
        fields: [
          { name: "spamLevel_" },
        ]
      },
      {
        name: "content_",
        using: "BTREE",
        fields: [
          { name: "content_" },
        ]
      },
      {
        name: "originalMail_",
        using: "BTREE",
        fields: [
          { name: "originalMail_" },
        ]
      },
    ]
  });
	general_archive_Email_.associate = models => {
		general_archive_Email_.belongsTo(models.general_Person_, { foreignKey: "fromPerson_"});
		general_archive_Email_.belongsTo(models.general_Team_, { foreignKey: "fromTeam_"});
		general_archive_Email_.belongsTo(models.general_archive_Email_, { foreignKey: "inReplyToMessage_"});
		general_archive_Email_.hasMany(models.general_archive_Email_, { foreignKey: "inReplyToMessage_"});
		general_archive_Email_.belongsTo(models.general_archive_Email_, { foreignKey: "threadRoot_"});
		general_archive_Email_.hasMany(models.general_archive_Email_, { foreignKey: "threadRoot_"});
		general_archive_Email_.hasMany(models.general_archive_Email__allReceivingTeams_, { foreignKey: "Email_"});
		general_archive_Email_.hasMany(models.general_archive_Email__attachedFiles_, { foreignKey: "Email_"});
		general_archive_Email_.hasMany(models.general_archive_Email__ccPersons_, { foreignKey: "Email_"});
		general_archive_Email_.hasMany(models.general_archive_Email__ccTeams_, { foreignKey: "Email_"});
		general_archive_Email_.hasMany(models.general_archive_Email__toPersons_, { foreignKey: "Email_"});
		general_archive_Email_.hasMany(models.general_archive_Email__toTeams_, { foreignKey: "Email_"});
	};
return general_archive_Email_


};
