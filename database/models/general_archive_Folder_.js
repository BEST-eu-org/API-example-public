/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Folder_ =  sequelize.define('general_archive_Folder_', {
    Folder_: {
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
    document_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document_',
        key: 'Document_'
      }
    },
    archive_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Archive_',
        key: 'Archive_'
      }
    },
    parent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Folder_',
        key: 'Folder_'
      }
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    officialType_: {
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
    }
  }, {
    sequelize,
    tableName: 'general_archive_Folder_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Folder_" },
        ]
      },
      {
        name: "Folder_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Folder_" },
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
        name: "document_",
        using: "BTREE",
        fields: [
          { name: "document_" },
        ]
      },
      {
        name: "archive_",
        using: "BTREE",
        fields: [
          { name: "archive_" },
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
        name: "responsible_",
        using: "BTREE",
        fields: [
          { name: "responsible_" },
        ]
      },
      {
        name: "officialType_",
        using: "BTREE",
        fields: [
          { name: "officialType_" },
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
    ]
  });
	general_archive_Folder_.associate = models => {
		general_archive_Folder_.hasMany(models.general_archive_File_, { foreignKey: "parent_"});
		general_archive_Folder_.belongsTo(models.general_archive_Document_, { foreignKey: "document_"});
		general_archive_Folder_.belongsTo(models.general_archive_Archive_, { foreignKey: "archive_"});
		general_archive_Folder_.belongsTo(models.general_archive_Folder_, { foreignKey: "parent_"});
		general_archive_Folder_.hasMany(models.general_archive_Folder_, { foreignKey: "parent_"});
		general_archive_Folder_.belongsTo(models.best_internal_Student_, { foreignKey: "responsible_"});
		general_archive_Folder_.hasMany(models.general_archive_Folder__changeLog_, { foreignKey: "Folder_"});
		general_archive_Folder_.hasMany(models.general_archive_Folder__events_, { foreignKey: "Folder_"});
		general_archive_Folder_.hasMany(models.general_archive_Shortcut_, { foreignKey: "parent_"});
		general_archive_Folder_.hasMany(models.general_archive_Shortcut_, { foreignKey: "targetFolder_"});
	};
return general_archive_Folder_


};
