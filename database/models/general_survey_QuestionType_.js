/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_QuestionType_ =  sequelize.define('general_survey_QuestionType_', {
    QuestionType_: {
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
    name_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    textAnswer_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intAnswer_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dateAnswer_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shared_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_survey_QuestionType_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "QuestionType_" },
        ]
      },
      {
        name: "QuestionType_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "QuestionType_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "textAnswer_",
        using: "BTREE",
        fields: [
          { name: "textAnswer_" },
        ]
      },
      {
        name: "intAnswer_",
        using: "BTREE",
        fields: [
          { name: "intAnswer_" },
        ]
      },
      {
        name: "dateAnswer_",
        using: "BTREE",
        fields: [
          { name: "dateAnswer_" },
        ]
      },
      {
        name: "shared_",
        using: "BTREE",
        fields: [
          { name: "shared_" },
        ]
      },
    ]
  });
	general_survey_QuestionType_.associate = models => {
		general_survey_QuestionType_.hasMany(models.general_survey_QuestionType__choices_, { foreignKey: "QuestionType_"});
		general_survey_QuestionType_.hasMany(models.general_survey_Question_, { foreignKey: "type_"});
	};
return general_survey_QuestionType_


};
