/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_FileVersion_ =  sequelize.define('general_archive_FileVersion_', {
    FileVersion_: {
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
    file_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
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
    submittedOn_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_archive_FileVersion_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FileVersion_" },
        ]
      },
      {
        name: "FileVersion_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FileVersion_" },
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
        name: "file_",
        using: "BTREE",
        fields: [
          { name: "file_" },
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
        name: "submittedOn_",
        using: "BTREE",
        fields: [
          { name: "submittedOn_" },
        ]
      },
    ]
  });
	general_archive_FileVersion_.associate = models => {
		general_archive_FileVersion_.belongsTo(models.general_archive_File_, { foreignKey: "file_"});
		general_archive_FileVersion_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
	};
return general_archive_FileVersion_


};
