/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Survey__questions_ =  sequelize.define('general_survey_Survey__questions_', {
    questions_: {
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
    number_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    letter_: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    help_: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    type_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    other_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_Survey__questions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questions_" },
        ]
      },
      {
        name: "questions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questions_" },
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
        name: "number_",
        using: "BTREE",
        fields: [
          { name: "number_" },
        ]
      },
      {
        name: "letter_",
        using: "BTREE",
        fields: [
          { name: "letter_" },
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
    ]
  });
	general_survey_Survey__questions_.associate = models => {
		general_survey_Survey__questions_.belongsTo(models.general_survey_Survey_, { foreignKey: "Survey_"});
		general_survey_Survey__questions_.hasMany(models.general_survey_Survey__questions__choices_, { foreignKey: "questions_"});
	};
return general_survey_Survey__questions_


};
