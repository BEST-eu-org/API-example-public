/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Document__inArchives_ =  sequelize.define('general_archive_Document__inArchives_', {
    inArchives_: {
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
    Archive_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Archive_',
        key: 'Archive_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Document__inArchives_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inArchives_" },
        ]
      },
      {
        name: "inArchives_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inArchives_" },
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
        name: "Archive_",
        using: "BTREE",
        fields: [
          { name: "Archive_" },
        ]
      },
    ]
  });
	general_archive_Document__inArchives_.associate = models => {
		general_archive_Document__inArchives_.belongsTo(models.general_archive_Document_, { foreignKey: "Document_"});
		general_archive_Document__inArchives_.belongsTo(models.general_archive_Archive_, { foreignKey: "Archive_"});
	};
return general_archive_Document__inArchives_


};
