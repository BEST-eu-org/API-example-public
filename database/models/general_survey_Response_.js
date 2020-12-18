/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Response_ =  sequelize.define('general_survey_Response_', {
    Response_: {
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
    survey_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    more_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    respondent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    responseToEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    responseToActivity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    },
    responseSigned_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    responseOfLbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    questionsAnswered_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_Response_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Response_" },
        ]
      },
      {
        name: "Response_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Response_" },
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
        name: "survey_",
        using: "BTREE",
        fields: [
          { name: "survey_" },
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
        name: "respondent_",
        using: "BTREE",
        fields: [
          { name: "respondent_" },
        ]
      },
      {
        name: "responseToEvent_",
        using: "BTREE",
        fields: [
          { name: "responseToEvent_" },
        ]
      },
      {
        name: "responseToActivity_",
        using: "BTREE",
        fields: [
          { name: "responseToActivity_" },
        ]
      },
      {
        name: "responseSigned_",
        using: "BTREE",
        fields: [
          { name: "responseSigned_" },
        ]
      },
      {
        name: "responseOfLbg_",
        using: "BTREE",
        fields: [
          { name: "responseOfLbg_" },
        ]
      },
      {
        name: "questionsAnswered_",
        using: "BTREE",
        fields: [
          { name: "questionsAnswered_" },
        ]
      },
    ]
  });
	general_survey_Response_.associate = models => {
		general_survey_Response_.hasOne(models.best_johnny_Activity_, { foreignKey: "lbgEval_"});
		general_survey_Response_.hasMany(models.best_johnny_Activity__profEvals_, { foreignKey: "eval_"});
		general_survey_Response_.hasMany(models.best_johnny_Activity__teachers_, { foreignKey: "evaluation_"});
		general_survey_Response_.hasMany(models.best_johnny_Application_, { foreignKey: "evaluation_"});
		general_survey_Response_.hasMany(models.general_event_Application_, { foreignKey: "evaluation_"});
		general_survey_Response_.belongsTo(models.general_Person_, { foreignKey: "respondent_"});
		general_survey_Response_.belongsTo(models.best_internal_Event_, { foreignKey: "responseToEvent_"});
		general_survey_Response_.belongsTo(models.best_johnny_Activity_, { foreignKey: "responseToActivity_"});
		general_survey_Response_.belongsTo(models.best_internal_Lbg_, { foreignKey: "responseOfLbg_"});
	};
return general_survey_Response_


};
