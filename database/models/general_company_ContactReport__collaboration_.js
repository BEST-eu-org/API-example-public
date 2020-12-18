/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_ContactReport__collaboration_ =  sequelize.define('general_company_ContactReport__collaboration_', {
    collaboration_: {
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
    Collaboration__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Collaboration_',
        key: 'Collaboration_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_company_ContactReport__collaboration_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collaboration_" },
        ]
      },
      {
        name: "collaboration_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collaboration_" },
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
        name: "Collaboration__",
        using: "BTREE",
        fields: [
          { name: "Collaboration__" },
        ]
      },
    ]
  });
	general_company_ContactReport__collaboration_.associate = models => {
		general_company_ContactReport__collaboration_.belongsTo(models.general_company_ContactReport_, { foreignKey: "ContactReport_"});
		general_company_ContactReport__collaboration_.belongsTo(models.general_company_Collaboration_, { foreignKey: "Collaboration__"});
	};
return general_company_ContactReport__collaboration_


};
