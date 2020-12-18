/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_File_ =  sequelize.define('general_archive_File_', {
    File_: {
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
      type: DataTypes.STRING(250),
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
    contentType_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    charset_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usedIn_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fileDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changelog_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    convertedContent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File__convertedContent_',
        key: 'convertedContent_'
      }
    },
    convertedContentLength_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Folder_',
        key: 'Folder_'
      }
    },
    authorLbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    otherAuthors_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    downloadCounter_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    officialNumber_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    approved_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approvedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    documentVIP_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortDescription_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discussionStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    discussionEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sha512_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_archive_File_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
      {
        name: "File_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
      {
        name: "title_parent",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title_" },
          { name: "parent_" },
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
        name: "contentLength_",
        using: "BTREE",
        fields: [
          { name: "contentLength_" },
        ]
      },
      {
        name: "contentType_",
        using: "BTREE",
        fields: [
          { name: "contentType_" },
        ]
      },
      {
        name: "usedIn_",
        using: "BTREE",
        fields: [
          { name: "usedIn_" },
        ]
      },
      {
        name: "fileDate_",
        using: "BTREE",
        fields: [
          { name: "fileDate_" },
        ]
      },
      {
        name: "convertedContent_",
        using: "BTREE",
        fields: [
          { name: "convertedContent_" },
        ]
      },
      {
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "parent_",
        using: "BTREE",
        fields: [
          { name: "parent_" },
        ]
      },
      {
        name: "authorLbg_",
        using: "BTREE",
        fields: [
          { name: "authorLbg_" },
        ]
      },
      {
        name: "otherAuthors_",
        using: "BTREE",
        fields: [
          { name: "otherAuthors_" },
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
        name: "downloadCounter_",
        using: "BTREE",
        fields: [
          { name: "downloadCounter_" },
        ]
      },
      {
        name: "officialNumber_",
        using: "BTREE",
        fields: [
          { name: "officialNumber_" },
        ]
      },
      {
        name: "approved_",
        using: "BTREE",
        fields: [
          { name: "approved_" },
        ]
      },
      {
        name: "approvedBy_",
        using: "BTREE",
        fields: [
          { name: "approvedBy_" },
        ]
      },
      {
        name: "documentVIP_",
        using: "BTREE",
        fields: [
          { name: "documentVIP_" },
        ]
      },
      {
        name: "discussionStart_",
        using: "BTREE",
        fields: [
          { name: "discussionStart_" },
        ]
      },
      {
        name: "discussionEnd_",
        using: "BTREE",
        fields: [
          { name: "discussionEnd_" },
        ]
      },
    ]
  });
	general_archive_File_.associate = models => {
		general_archive_File_.hasMany(models.best_internal_LbgApplication__budget_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.best_internal_LbgApplication__motivationLetterFile_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.best_internal_RefundRequest_, { foreignKey: "compiledReceipts_"});
		general_archive_File_.hasMany(models.best_internal_RefundRequest__expensesReceipts_, { foreignKey: "file_"});
		general_archive_File_.hasMany(models.best_internal_RefundRequest__expenses_, { foreignKey: "receipt_"});
		general_archive_File_.hasMany(models.best_internal_RefundRequest__expenses_, { foreignKey: "receiptPartial_"});
		general_archive_File_.hasMany(models.best_internal_eec_competition_Task_, { foreignKey: "attachment_"});
		general_archive_File_.hasMany(models.best_internal_vote_Round_, { foreignKey: "proposalFile_"});
		general_archive_File_.hasMany(models.best_johnny_Activity__courseInformationForm_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.best_johnny_Activity__materials_, { foreignKey: "file_"});
		general_archive_File_.hasMany(models.general_accounting_Transfer_, { foreignKey: "invoice_"});
		general_archive_File_.hasMany(models.general_archive_Document__attachments_, { foreignKey: "currentVersion_"});
		general_archive_File_.hasMany(models.general_archive_Document__attachments__archivedVersions_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.general_archive_Email__attachedFiles_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.general_archive_FileVersion_, { foreignKey: "file_"});
		general_archive_File_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		general_archive_File_.belongsTo(models.general_archive_File__convertedContent_, { foreignKey: "convertedContent_"});
		general_archive_File_.belongsTo(models.general_archive_Folder_, { foreignKey: "parent_"});
		general_archive_File_.belongsTo(models.best_internal_Lbg_, { foreignKey: "authorLbg_"});
		general_archive_File_.belongsTo(models.best_internal_Event_, { foreignKey: "approvedBy_"});
		general_archive_File_.hasMany(models.general_archive_File__authors_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.general_archive_File__tags_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.general_archive_Shortcut_, { foreignKey: "targetFile_"});
		general_archive_File_.hasMany(models.general_company_CompanyRepresentative_, { foreignKey: "curriculumVitae_"});
		general_archive_File_.hasMany(models.general_company_ContactReport__attachment_, { foreignKey: "File_"});
		general_archive_File_.hasMany(models.general_event_Event__materials_, { foreignKey: "file_"});
		general_archive_File_.hasMany(models.general_forum_Thread_, { foreignKey: "file_"});
	};
return general_archive_File_


};
