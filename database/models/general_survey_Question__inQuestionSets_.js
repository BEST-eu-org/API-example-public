/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Question__inQuestionSets_ =  sequelize.define('general_survey_Question__inQuestionSets_', {
    inQuestionSets_: {
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
    Question_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Question_',
        key: 'Question_'
      }
    },
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    questionSet_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_Question__inQuestionSets_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inQuestionSets_" },
        ]
      },
      {
        name: "inQuestionSets_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inQuestionSets_" },
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
        name: "Question_",
        using: "BTREE",
        fields: [
          { name: "Question_" },
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
        name: "questionSet_",
        using: "BTREE",
        fields: [
          { name: "questionSet_" },
        ]
      },
    ]
  });
	general_survey_Question__inQuestionSets_.associate = models => {
		general_survey_Question__inQuestionSets_.belongsTo(models.general_survey_Question_, { foreignKey: "Question_"});
	};
return general_survey_Question__inQuestionSets_


};
