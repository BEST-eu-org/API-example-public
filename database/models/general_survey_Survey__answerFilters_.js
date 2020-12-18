/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Survey__answerFilters_ =  sequelize.define('general_survey_Survey__answerFilters_', {
    answerFilters_: {
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
    Question_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Question_',
        key: 'Question_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_survey_Survey__answerFilters_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answerFilters_" },
        ]
      },
      {
        name: "answerFilters_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answerFilters_" },
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
        name: "Question_",
        using: "BTREE",
        fields: [
          { name: "Question_" },
        ]
      },
    ]
  });
	general_survey_Survey__answerFilters_.associate = models => {
		general_survey_Survey__answerFilters_.belongsTo(models.general_survey_Survey_, { foreignKey: "Survey_"});
		general_survey_Survey__answerFilters_.belongsTo(models.general_survey_Question_, { foreignKey: "Question_"});
	};
return general_survey_Survey__answerFilters_


};
