/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Shortcut_ =  sequelize.define('general_archive_Shortcut_', {
    Shortcut_: {
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
    parent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Folder_',
        key: 'Folder_'
      }
    },
    targetFolder_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Folder_',
        key: 'Folder_'
      }
    },
    targetFile_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Shortcut_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Shortcut_" },
        ]
      },
      {
        name: "Shortcut_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Shortcut_" },
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
        name: "parent_",
        using: "BTREE",
        fields: [
          { name: "parent_" },
        ]
      },
      {
        name: "targetFolder_",
        using: "BTREE",
        fields: [
          { name: "targetFolder_" },
        ]
      },
      {
        name: "targetFile_",
        using: "BTREE",
        fields: [
          { name: "targetFile_" },
        ]
      },
    ]
  });
	general_archive_Shortcut_.associate = models => {
		general_archive_Shortcut_.belongsTo(models.general_archive_Folder_, { foreignKey: "parent_"});
		general_archive_Shortcut_.belongsTo(models.general_archive_Folder_, { foreignKey: "targetFolder_"});
		general_archive_Shortcut_.belongsTo(models.general_archive_File_, { foreignKey: "targetFile_"});
	};
return general_archive_Shortcut_


};
