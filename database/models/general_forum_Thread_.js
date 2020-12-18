/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_forum_Thread_ =  sequelize.define('general_forum_Thread_', {
    Thread_: {
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
    document_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document_',
        key: 'Document_'
      }
    },
    title_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discussionDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    visible_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    file_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_forum_Thread_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Thread_" },
        ]
      },
      {
        name: "Thread_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Thread_" },
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
        name: "document_",
        using: "BTREE",
        fields: [
          { name: "document_" },
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
        name: "discussionDeadline_",
        using: "BTREE",
        fields: [
          { name: "discussionDeadline_" },
        ]
      },
      {
        name: "createdBy_",
        using: "BTREE",
        fields: [
          { name: "createdBy_" },
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
        name: "file_",
        using: "BTREE",
        fields: [
          { name: "file_" },
        ]
      },
    ]
  });
	general_forum_Thread_.associate = models => {
		general_forum_Thread_.hasMany(models.general_forum_Notification_, { foreignKey: "thread_"});
		general_forum_Thread_.hasMany(models.general_forum_Post_, { foreignKey: "thread_"});
		general_forum_Thread_.belongsTo(models.general_archive_Document_, { foreignKey: "document_"});
		general_forum_Thread_.belongsTo(models.general_Person_, { foreignKey: "createdBy_"});
		general_forum_Thread_.belongsTo(models.general_archive_File_, { foreignKey: "file_"});
	};
return general_forum_Thread_


};
