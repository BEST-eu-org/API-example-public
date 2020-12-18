/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Question_ =  sequelize.define('general_survey_Question_', {
    Question_: {
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
    question__: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    help_: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_QuestionType_',
        key: 'QuestionType_'
      }
    },
    inQuestionSet_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_QuestionSet_',
        key: 'QuestionSet_'
      }
    },
    isShared_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    surveyType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_Question_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Question_" },
        ]
      },
      {
        name: "Question_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Question_" },
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
        name: "question__",
        using: "BTREE",
        fields: [
          { name: "question__" },
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
        name: "help_",
        using: "BTREE",
        fields: [
          { name: "help_" },
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
        name: "inQuestionSet_",
        using: "BTREE",
        fields: [
          { name: "inQuestionSet_" },
        ]
      },
      {
        name: "isShared_",
        using: "BTREE",
        fields: [
          { name: "isShared_" },
        ]
      },
      {
        name: "surveyType_",
        using: "BTREE",
        fields: [
          { name: "surveyType_" },
        ]
      },
    ]
  });
	general_survey_Question_.associate = models => {
		general_survey_Question_.belongsTo(models.general_survey_QuestionType_, { foreignKey: "type_"});
		general_survey_Question_.belongsTo(models.general_survey_QuestionSet_, { foreignKey: "inQuestionSet_"});
		general_survey_Question_.hasMany(models.general_survey_Question__inQuestionSets_, { foreignKey: "Question_"});
		general_survey_Question_.hasMany(models.general_survey_Survey__answerFilters_, { foreignKey: "Question_"});
	};
return general_survey_Question_


};
