/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_SurveyQuestions_ =  sequelize.define('best_internal_tigro_SurveyQuestions_', {
    SurveyQuestions_: {
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
    question_: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_SurveyQuestions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SurveyQuestions_" },
        ]
      },
      {
        name: "SurveyQuestions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SurveyQuestions_" },
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
        name: "question_",
        using: "BTREE",
        fields: [
          { name: "question_" },
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
	best_internal_tigro_SurveyQuestions_.associate = models => {
		best_internal_tigro_SurveyQuestions_.hasMany(models.best_internal_tigro_SurveyAnswers__answers_, { foreignKey: "question_"});
	};
return best_internal_tigro_SurveyQuestions_


};
