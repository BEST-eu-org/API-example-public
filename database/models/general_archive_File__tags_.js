/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_File__tags_ =  sequelize.define('general_archive_File__tags_', {
    tags_: {
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
    File_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    },
    Label_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Label_',
        key: 'Label_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_File__tags_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tags_" },
        ]
      },
      {
        name: "tags_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tags_" },
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
        name: "File_",
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
      {
        name: "Label_",
        using: "BTREE",
        fields: [
          { name: "Label_" },
        ]
      },
    ]
  });
	general_archive_File__tags_.associate = models => {
		general_archive_File__tags_.belongsTo(models.general_archive_File_, { foreignKey: "File_"});
		general_archive_File__tags_.belongsTo(models.general_archive_Label_, { foreignKey: "Label_"});
	};
return general_archive_File__tags_


};
