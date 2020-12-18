/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_AnswerOption_ =  sequelize.define('general_event_AnswerOption_', {
    AnswerOption_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_AnswerOption_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AnswerOption_" },
        ]
      },
      {
        name: "AnswerOption_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AnswerOption_" },
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
    ]
  });
	general_event_AnswerOption_.associate = models => {
		general_event_AnswerOption_.hasMany(models.general_event_Application__answers__selectedOptions_, { foreignKey: "AnswerOption_"});
		general_event_AnswerOption_.hasMany(models.general_event_Question__answerOptions_, { foreignKey: "AnswerOption_"});
	};
return general_event_AnswerOption_


};
