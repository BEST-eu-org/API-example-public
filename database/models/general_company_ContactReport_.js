/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_ContactReport_ =  sequelize.define('general_company_ContactReport_', {
    ContactReport_: {
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
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contactDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    report_: {
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
    collaboration_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Collaboration_',
        key: 'Collaboration_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    actionStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_ContactReport_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ContactReport_" },
        ]
      },
      {
        name: "ContactReport_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ContactReport_" },
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
        name: "contactDate_",
        using: "BTREE",
        fields: [
          { name: "contactDate_" },
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
        name: "collaboration_",
        using: "BTREE",
        fields: [
          { name: "collaboration_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
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
        name: "actionStatus_",
        using: "BTREE",
        fields: [
          { name: "actionStatus_" },
        ]
      },
    ]
  });
	general_company_ContactReport_.associate = models => {
		general_company_ContactReport_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		general_company_ContactReport_.belongsTo(models.general_company_Collaboration_, { foreignKey: "collaboration_"});
		general_company_ContactReport_.hasMany(models.general_company_ContactReport__attachment_, { foreignKey: "ContactReport_"});
		general_company_ContactReport_.hasMany(models.general_company_ContactReport__bestMembers_, { foreignKey: "ContactReport_"});
		general_company_ContactReport_.hasMany(models.general_company_ContactReport__changeLog_, { foreignKey: "ContactReport_"});
		general_company_ContactReport_.hasMany(models.general_company_ContactReport__collaboration_, { foreignKey: "ContactReport_"});
		general_company_ContactReport_.hasMany(models.general_company_ContactReport__companyRepresentative_, { foreignKey: "ContactReport_"});
	};
return general_company_ContactReport_


};
