/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_ContactReport__bestMembers_ =  sequelize.define('general_company_ContactReport__bestMembers_', {
    bestMembers_: {
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
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_company_ContactReport__bestMembers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bestMembers_" },
        ]
      },
      {
        name: "bestMembers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bestMembers_" },
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
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	general_company_ContactReport__bestMembers_.associate = models => {
		general_company_ContactReport__bestMembers_.belongsTo(models.general_company_ContactReport_, { foreignKey: "ContactReport_"});
		general_company_ContactReport__bestMembers_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return general_company_ContactReport__bestMembers_


};
