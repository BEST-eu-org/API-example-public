/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Survey__questions__choices_ =  sequelize.define('general_survey_Survey__questions__choices_', {
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
    questions_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey__questions_',
        key: 'questions_'
      }
    },
    name_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    number_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extra_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_Survey__questions__choices_',
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
        name: "questions_",
        using: "BTREE",
        fields: [
          { name: "questions_" },
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
        name: "number_",
        using: "BTREE",
        fields: [
          { name: "number_" },
        ]
      },
      {
        name: "extra_",
        using: "BTREE",
        fields: [
          { name: "extra_" },
        ]
      },
    ]
  });
	general_survey_Survey__questions__choices_.associate = models => {
		general_survey_Survey__questions__choices_.belongsTo(models.general_survey_Survey__questions_, { foreignKey: "questions_"});
	};
return general_survey_Survey__questions__choices_


};
