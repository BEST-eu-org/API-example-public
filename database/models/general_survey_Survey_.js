/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Survey_ =  sequelize.define('general_survey_Survey_', {
    Survey_: {
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
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    owner_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allowAnonymous_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    surveyType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    responseStartPage_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responseEditPage_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responseViewPage_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    introductionPageText_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responseAllowedTo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    responseAllowedToSpecial_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onlyOwnerCanSeeAnswers_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_Survey_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Survey_" },
        ]
      },
      {
        name: "Survey_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Survey_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
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
        name: "allowAnonymous_",
        using: "BTREE",
        fields: [
          { name: "allowAnonymous_" },
        ]
      },
      {
        name: "surveyType_",
        using: "BTREE",
        fields: [
          { name: "surveyType_" },
        ]
      },
      {
        name: "responseAllowedTo_",
        using: "BTREE",
        fields: [
          { name: "responseAllowedTo_" },
        ]
      },
      {
        name: "onlyOwnerCanSeeAnswers_",
        using: "BTREE",
        fields: [
          { name: "onlyOwnerCanSeeAnswers_" },
        ]
      },
    ]
  });
	general_survey_Survey_.associate = models => {
		general_survey_Survey_.hasMany(models.best_internal_Event_, { foreignKey: "survey_"});
		general_survey_Survey_.hasMany(models.best_johnny_Activity_, { foreignKey: "studentEvalForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Activity_, { foreignKey: "profEvalForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "courseOnTechnologyEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "courseOnLanguagesEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "courseOnCareerRelatedSkillsEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "engineeringCompetitionEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "eventOnEducationEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "leisureEventEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "partnerOrganisationEventEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "europeanBestEngineeringCompetitionEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "bestCareerDayEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "teacherEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "organiserEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "onlineCourseEvaluationForm_"});
		general_survey_Survey_.hasMany(models.best_johnny_Season_, { foreignKey: "localCourseEvaluationForm_"});
		general_survey_Survey_.hasMany(models.general_survey_QuestionSet_, { foreignKey: "inSurvey_"});
		general_survey_Survey_.hasMany(models.general_survey_QuestionSet__inSurveys_, { foreignKey: "survey_"});
		general_survey_Survey_.hasMany(models.general_survey_Survey__answerFilters_, { foreignKey: "Survey_"});
		general_survey_Survey_.hasMany(models.general_survey_Survey__owner_, { foreignKey: "Survey_"});
		general_survey_Survey_.hasMany(models.general_survey_Survey__questions_, { foreignKey: "Survey_"});
		general_survey_Survey_.hasMany(models.general_survey_Survey__responseAllowedToTeams_, { foreignKey: "Survey_"});
		general_survey_Survey_.hasMany(models.general_survey_Survey__viewableBy_, { foreignKey: "Survey_"});
	};
return general_survey_Survey_


};
