/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_SurveyAnswers_ =  sequelize.define('best_internal_tigro_SurveyAnswers_', {
    SurveyAnswers_: {
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
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mbti_: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_SurveyAnswers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SurveyAnswers_" },
        ]
      },
      {
        name: "SurveyAnswers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SurveyAnswers_" },
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "mbti_",
        using: "BTREE",
        fields: [
          { name: "mbti_" },
        ]
      },
    ]
  });
	best_internal_tigro_SurveyAnswers_.associate = models => {
		best_internal_tigro_SurveyAnswers_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		best_internal_tigro_SurveyAnswers_.hasMany(models.best_internal_tigro_SurveyAnswers__answers_, { foreignKey: "SurveyAnswers_"});
	};
return best_internal_tigro_SurveyAnswers_


};
