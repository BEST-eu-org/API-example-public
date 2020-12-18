/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Question_ =  sequelize.define('general_event_Question_', {
    Question_: {
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
    },
    allowMultipleSelection_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Question_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Question_" },
        ]
      },
      {
        name: "Question_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Question_" },
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
        name: "allowMultipleSelection_",
        using: "BTREE",
        fields: [
          { name: "allowMultipleSelection_" },
        ]
      },
      {
        name: "position_",
        using: "BTREE",
        fields: [
          { name: "position_" },
        ]
      },
    ]
  });
	general_event_Question_.associate = models => {
		general_event_Question_.hasMany(models.general_event_Application__answers_, { foreignKey: "question_"});
		general_event_Question_.hasMany(models.general_event_Event__applicationQuestions_, { foreignKey: "question_"});
		general_event_Question_.hasMany(models.general_event_Question__answerOptions_, { foreignKey: "Question_"});
	};
return general_event_Question_


};
