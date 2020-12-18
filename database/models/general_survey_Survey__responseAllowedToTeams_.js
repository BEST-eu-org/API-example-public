/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Survey__responseAllowedToTeams_ =  sequelize.define('general_survey_Survey__responseAllowedToTeams_', {
    responseAllowedToTeams_: {
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
    Survey_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_survey_Survey__responseAllowedToTeams_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "responseAllowedToTeams_" },
        ]
      },
      {
        name: "responseAllowedToTeams_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "responseAllowedToTeams_" },
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
        name: "Survey_",
        using: "BTREE",
        fields: [
          { name: "Survey_" },
        ]
      },
      {
        name: "Team_",
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
    ]
  });
	general_survey_Survey__responseAllowedToTeams_.associate = models => {
		general_survey_Survey__responseAllowedToTeams_.belongsTo(models.general_survey_Survey_, { foreignKey: "Survey_"});
		general_survey_Survey__responseAllowedToTeams_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
	};
return general_survey_Survey__responseAllowedToTeams_


};
