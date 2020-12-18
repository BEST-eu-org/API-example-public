/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Application__answers__selectedOptions_ =  sequelize.define('general_event_Application__answers__selectedOptions_', {
    selectedOptions_: {
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
    answers_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Application__answers_',
        key: 'answers_'
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
    tableName: 'general_event_Application__answers__selectedOptions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "selectedOptions_" },
        ]
      },
      {
        name: "selectedOptions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "selectedOptions_" },
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
        name: "answers_",
        using: "BTREE",
        fields: [
          { name: "answers_" },
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
	general_event_Application__answers__selectedOptions_.associate = models => {
		general_event_Application__answers__selectedOptions_.belongsTo(models.general_event_Application__answers_, { foreignKey: "answers_"});
		general_event_Application__answers__selectedOptions_.belongsTo(models.general_event_AnswerOption_, { foreignKey: "AnswerOption_"});
	};
return general_event_Application__answers__selectedOptions_


};
