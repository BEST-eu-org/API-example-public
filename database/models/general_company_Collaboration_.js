/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Collaboration_ =  sequelize.define('general_company_Collaboration_', {
    Collaboration_: {
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
    project_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Project_',
        key: 'Project_'
      }
    },
    company_: {
      type: DataTypes.INTEGER,
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
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    results_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_Collaboration_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Collaboration_" },
        ]
      },
      {
        name: "Collaboration_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Collaboration_" },
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
        name: "project_",
        using: "BTREE",
        fields: [
          { name: "project_" },
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
        name: "responsible_",
        using: "BTREE",
        fields: [
          { name: "responsible_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
    ]
  });
	general_company_Collaboration_.associate = models => {
		general_company_Collaboration_.belongsTo(models.general_Project_, { foreignKey: "project_"});
		general_company_Collaboration_.belongsTo(models.best_internal_Student_, { foreignKey: "responsible_"});
		general_company_Collaboration_.hasMany(models.general_company_Collaboration__changeLog_, { foreignKey: "Collaboration_"});
		general_company_Collaboration_.hasMany(models.general_company_Collaboration__obligations_, { foreignKey: "Collaboration_"});
		general_company_Collaboration_.hasMany(models.general_company_ContactReport_, { foreignKey: "collaboration_"});
		general_company_Collaboration_.hasMany(models.general_company_ContactReport__collaboration_, { foreignKey: "Collaboration__"});
	};
return general_company_Collaboration_


};
