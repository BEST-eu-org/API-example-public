/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Project_ =  sequelize.define('general_Project_', {
    Project_: {
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
    internalEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    vivaldiEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    },
    name_: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    startDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partnershipLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wiki_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_wiki_Namespace_',
        key: 'Namespace_'
      }
    },
    wikiLink_: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Project_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Project_" },
        ]
      },
      {
        name: "Project_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Project_" },
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
        name: "internalEvent_",
        using: "BTREE",
        fields: [
          { name: "internalEvent_" },
        ]
      },
      {
        name: "vivaldiEvent_",
        using: "BTREE",
        fields: [
          { name: "vivaldiEvent_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "team_",
        using: "BTREE",
        fields: [
          { name: "team_" },
        ]
      },
      {
        name: "startDate_",
        using: "BTREE",
        fields: [
          { name: "startDate_" },
        ]
      },
      {
        name: "endDate_",
        using: "BTREE",
        fields: [
          { name: "endDate_" },
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
        name: "projectType_",
        using: "BTREE",
        fields: [
          { name: "projectType_" },
        ]
      },
      {
        name: "partnershipLevel_",
        using: "BTREE",
        fields: [
          { name: "partnershipLevel_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "wiki_",
        using: "BTREE",
        fields: [
          { name: "wiki_" },
        ]
      },
      {
        name: "wikiLink_",
        using: "BTREE",
        fields: [
          { name: "wikiLink_" },
        ]
      },
    ]
  });
	general_Project_.associate = models => {
		general_Project_.hasMany(models.best_internal_ipp_Project_, { foreignKey: "generalProject_"});
		general_Project_.hasMany(models.best_internal_tasklist_Task_, { foreignKey: "project_"});
		general_Project_.belongsTo(models.best_internal_Event_, { foreignKey: "internalEvent_"});
		general_Project_.belongsTo(models.best_johnny_Activity_, { foreignKey: "vivaldiEvent_"});
		general_Project_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		general_Project_.belongsTo(models.general_Team_, { foreignKey: "team_"});
		general_Project_.belongsTo(models.general_Person_, { foreignKey: "responsible_"});
		general_Project_.belongsTo(models.best_wiki_Namespace_, { foreignKey: "wiki_"});
		general_Project_.hasMany(models.general_Project__archive_, { foreignKey: "Project_"});
		general_Project_.hasMany(models.general_Project__events_, { foreignKey: "Project_"});
		general_Project_.hasMany(models.general_Project__responsibles_, { foreignKey: "Project_"});
		general_Project_.hasMany(models.general_Project__teams_, { foreignKey: "Project_"});
		general_Project_.hasMany(models.general_company_Collaboration_, { foreignKey: "project_"});
	};
return general_Project_


};
