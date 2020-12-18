/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_QuestionSet_ =  sequelize.define('general_survey_QuestionSet_', {
    QuestionSet_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inSurvey_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parentQuestionSet_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_QuestionSet_',
        key: 'QuestionSet_'
      }
    },
    threadLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    threadRoot_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_QuestionSet_',
        key: 'QuestionSet_'
      }
    },
    threadPath_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_QuestionSet_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "QuestionSet_" },
        ]
      },
      {
        name: "QuestionSet_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "QuestionSet_" },
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
        name: "inSurvey_",
        using: "BTREE",
        fields: [
          { name: "inSurvey_" },
        ]
      },
      {
        name: "position_",
        using: "BTREE",
        fields: [
          { name: "position_" },
        ]
      },
      {
        name: "parentQuestionSet_",
        using: "BTREE",
        fields: [
          { name: "parentQuestionSet_" },
        ]
      },
      {
        name: "threadLevel_",
        using: "BTREE",
        fields: [
          { name: "threadLevel_" },
        ]
      },
      {
        name: "threadRoot_",
        using: "BTREE",
        fields: [
          { name: "threadRoot_" },
        ]
      },
    ]
  });
	general_survey_QuestionSet_.associate = models => {
		general_survey_QuestionSet_.belongsTo(models.general_survey_Survey_, { foreignKey: "inSurvey_"});
		general_survey_QuestionSet_.belongsTo(models.general_survey_QuestionSet_, { foreignKey: "parentQuestionSet_"});
		general_survey_QuestionSet_.hasMany(models.general_survey_QuestionSet_, { foreignKey: "parentQuestionSet_"});
		general_survey_QuestionSet_.belongsTo(models.general_survey_QuestionSet_, { foreignKey: "threadRoot_"});
		general_survey_QuestionSet_.hasMany(models.general_survey_QuestionSet_, { foreignKey: "threadRoot_"});
		general_survey_QuestionSet_.hasMany(models.general_survey_QuestionSet__inSurveys_, { foreignKey: "QuestionSet_"});
		general_survey_QuestionSet_.hasMany(models.general_survey_Question_, { foreignKey: "inQuestionSet_"});
	};
return general_survey_QuestionSet_


};
