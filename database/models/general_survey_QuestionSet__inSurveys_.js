/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_QuestionSet__inSurveys_ =  sequelize.define('general_survey_QuestionSet__inSurveys_', {
    inSurveys_: {
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
    QuestionSet_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_QuestionSet_',
        key: 'QuestionSet_'
      }
    },
    survey_: {
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
    pageBreakBefore_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_QuestionSet__inSurveys_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inSurveys_" },
        ]
      },
      {
        name: "inSurveys_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inSurveys_" },
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
        name: "QuestionSet_",
        using: "BTREE",
        fields: [
          { name: "QuestionSet_" },
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
        name: "position_",
        using: "BTREE",
        fields: [
          { name: "position_" },
        ]
      },
      {
        name: "pageBreakBefore_",
        using: "BTREE",
        fields: [
          { name: "pageBreakBefore_" },
        ]
      },
    ]
  });
	general_survey_QuestionSet__inSurveys_.associate = models => {
		general_survey_QuestionSet__inSurveys_.belongsTo(models.general_survey_QuestionSet_, { foreignKey: "QuestionSet_"});
		general_survey_QuestionSet__inSurveys_.belongsTo(models.general_survey_Survey_, { foreignKey: "survey_"});
	};
return general_survey_QuestionSet__inSurveys_


};
