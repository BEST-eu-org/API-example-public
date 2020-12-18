/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_ContactReport__attachment_ =  sequelize.define('general_company_ContactReport__attachment_', {
    attachment_: {
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
    ContactReport_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_ContactReport_',
        key: 'ContactReport_'
      }
    },
    File_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_company_ContactReport__attachment_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attachment_" },
        ]
      },
      {
        name: "attachment_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attachment_" },
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
        name: "ContactReport_",
        using: "BTREE",
        fields: [
          { name: "ContactReport_" },
        ]
      },
      {
        name: "File_",
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
    ]
  });
	general_company_ContactReport__attachment_.associate = models => {
		general_company_ContactReport__attachment_.belongsTo(models.general_company_ContactReport_, { foreignKey: "ContactReport_"});
		general_company_ContactReport__attachment_.belongsTo(models.general_archive_File_, { foreignKey: "File_"});
	};
return general_company_ContactReport__attachment_


};
