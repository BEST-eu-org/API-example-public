/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Question__answerOptions_ =  sequelize.define('general_event_Question__answerOptions_', {
    answerOptions_: {
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
        model: 'general_event_Question_',
        key: 'Question_'
      }
    },
    AnswerOption_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_AnswerOption_',
        key: 'AnswerOption_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Question__answerOptions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answerOptions_" },
        ]
      },
      {
        name: "answerOptions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answerOptions_" },
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
        name: "AnswerOption_",
        using: "BTREE",
        fields: [
          { name: "AnswerOption_" },
        ]
      },
    ]
  });
	general_event_Question__answerOptions_.associate = models => {
		general_event_Question__answerOptions_.belongsTo(models.general_event_Question_, { foreignKey: "Question_"});
		general_event_Question__answerOptions_.belongsTo(models.general_event_AnswerOption_, { foreignKey: "AnswerOption_"});
	};
return general_event_Question__answerOptions_


};
