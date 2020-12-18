/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Report_ =  sequelize.define('general_company_Report_', {
    Report_: {
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
    datepost_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    report__: {
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
    company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
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
    actionDate_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_Report_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Report_" },
        ]
      },
      {
        name: "Report_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Report_" },
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
        name: "company_",
        using: "BTREE",
        fields: [
          { name: "company_" },
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
        name: "actionDate_",
        using: "BTREE",
        fields: [
          { name: "actionDate_" },
        ]
      },
    ]
  });
	general_company_Report_.associate = models => {
		general_company_Report_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		general_company_Report_.belongsTo(models.general_company_Company_, { foreignKey: "company_"});
	};
return general_company_Report_


};
