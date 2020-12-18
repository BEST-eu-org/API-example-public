/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Document__attachments_ =  sequelize.define('general_archive_Document__attachments_', {
    attachments_: {
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
    Document_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document_',
        key: 'Document_'
      }
    },
    filename_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title_: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    currentVersion_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Document__attachments_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attachments_" },
        ]
      },
      {
        name: "attachments_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attachments_" },
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
        name: "Document_",
        using: "BTREE",
        fields: [
          { name: "Document_" },
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
        name: "currentVersion_",
        using: "BTREE",
        fields: [
          { name: "currentVersion_" },
        ]
      },
    ]
  });
	general_archive_Document__attachments_.associate = models => {
		general_archive_Document__attachments_.belongsTo(models.general_archive_Document_, { foreignKey: "Document_"});
		general_archive_Document__attachments_.belongsTo(models.general_archive_File_, { foreignKey: "currentVersion_"});
		general_archive_Document__attachments_.hasMany(models.general_archive_Document__attachments__archivedVersions_, { foreignKey: "attachments_"});
	};
return general_archive_Document__attachments_


};
