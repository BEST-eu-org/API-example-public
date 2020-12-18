/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_QuestionType__choices_ =  sequelize.define('general_survey_QuestionType__choices_', {
    choices_: {
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
    QuestionType_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_QuestionType_',
        key: 'QuestionType_'
      }
    },
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content_: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    value_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_QuestionType__choices_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "choices_" },
        ]
      },
      {
        name: "choices_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "choices_" },
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
        name: "QuestionType_",
        using: "BTREE",
        fields: [
          { name: "QuestionType_" },
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
        name: "content_",
        using: "BTREE",
        fields: [
          { name: "content_" },
        ]
      },
      {
        name: "value_",
        using: "BTREE",
        fields: [
          { name: "value_" },
        ]
      },
    ]
  });
	general_survey_QuestionType__choices_.associate = models => {
		general_survey_QuestionType__choices_.belongsTo(models.general_survey_QuestionType_, { foreignKey: "QuestionType_"});
	};
return general_survey_QuestionType__choices_


};
