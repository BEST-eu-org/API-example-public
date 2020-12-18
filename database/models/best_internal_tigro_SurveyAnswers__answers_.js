/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_SurveyAnswers__answers_ =  sequelize.define('best_internal_tigro_SurveyAnswers__answers_', {
    answers_: {
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
    SurveyAnswers_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tigro_SurveyAnswers_',
        key: 'SurveyAnswers_'
      }
    },
    question_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tigro_SurveyQuestions_',
        key: 'SurveyQuestions_'
      }
    },
    intAnswer_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_SurveyAnswers__answers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answers_" },
        ]
      },
      {
        name: "answers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answers_" },
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
        name: "SurveyAnswers_",
        using: "BTREE",
        fields: [
          { name: "SurveyAnswers_" },
        ]
      },
      {
        name: "question_",
        using: "BTREE",
        fields: [
          { name: "question_" },
        ]
      },
      {
        name: "intAnswer_",
        using: "BTREE",
        fields: [
          { name: "intAnswer_" },
        ]
      },
    ]
  });
	best_internal_tigro_SurveyAnswers__answers_.associate = models => {
		best_internal_tigro_SurveyAnswers__answers_.belongsTo(models.best_internal_tigro_SurveyAnswers_, { foreignKey: "SurveyAnswers_"});
		best_internal_tigro_SurveyAnswers__answers_.belongsTo(models.best_internal_tigro_SurveyQuestions_, { foreignKey: "question_"});
	};
return best_internal_tigro_SurveyAnswers__answers_


};
