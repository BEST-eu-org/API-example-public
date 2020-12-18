/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Document_ =  sequelize.define('general_archive_Document_', {
    Document_: {
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
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    authorsChar_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    category_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiredOn_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charset_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    threadLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    threadRoot_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document_',
        key: 'Document_'
      }
    },
    threadPath_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    headers_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    documentNumber_: {
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
    creationDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shortname_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsView_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsEdit_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsDelete_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    specialName_: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'general_archive_Document_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Document_" },
        ]
      },
      {
        name: "Document_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Document_" },
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
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "authorsChar_",
        using: "BTREE",
        fields: [
          { name: "authorsChar_" },
        ]
      },
      {
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
      {
        name: "expiredOn_",
        using: "BTREE",
        fields: [
          { name: "expiredOn_" },
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
        name: "threadLevel_",
        using: "BTREE",
        fields: [
          { name: "threadLevel_" },
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
        name: "documentNumber_",
        using: "BTREE",
        fields: [
          { name: "documentNumber_" },
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
        name: "creationDate_",
        using: "BTREE",
        fields: [
          { name: "creationDate_" },
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
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "accessRightsView_",
        using: "BTREE",
        fields: [
          { name: "accessRightsView_" },
        ]
      },
      {
        name: "accessRightsEdit_",
        using: "BTREE",
        fields: [
          { name: "accessRightsEdit_" },
        ]
      },
      {
        name: "accessRightsDelete_",
        using: "BTREE",
        fields: [
          { name: "accessRightsDelete_" },
        ]
      },
      {
        name: "specialName_",
        using: "BTREE",
        fields: [
          { name: "specialName_" },
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
	general_archive_Document_.associate = models => {
		general_archive_Document_.hasMany(models.best_internal_vote_Round_, { foreignKey: "proposal_"});
		general_archive_Document_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		general_archive_Document_.belongsTo(models.general_archive_Document_, { foreignKey: "threadRoot_"});
		general_archive_Document_.hasMany(models.general_archive_Document_, { foreignKey: "threadRoot_"});
		general_archive_Document_.belongsTo(models.best_internal_Event_, { foreignKey: "approvedBy_"});
		general_archive_Document_.hasMany(models.general_archive_Document__attachments_, { foreignKey: "Document_"});
		general_archive_Document_.hasMany(models.general_archive_Document__authors_, { foreignKey: "Document_"});
		general_archive_Document_.hasMany(models.general_archive_Document__changeLog_, { foreignKey: "Document_"});
		general_archive_Document_.hasMany(models.general_archive_Document__comments_, { foreignKey: "Document_"});
		general_archive_Document_.hasMany(models.general_archive_Document__events_, { foreignKey: "Document_"});
		general_archive_Document_.hasMany(models.general_archive_Document__inArchives_, { foreignKey: "Document_"});
		general_archive_Document_.hasMany(models.general_archive_Folder_, { foreignKey: "document_"});
		general_archive_Document_.hasMany(models.general_forum_Thread_, { foreignKey: "document_"});
	};
return general_archive_Document_


};
