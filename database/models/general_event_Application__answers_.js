/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Application__answers_ =  sequelize.define('general_event_Application__answers_', {
    answers_: {
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
    Application_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Application_',
        key: 'Application_'
      }
    },
    question_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Question_',
        key: 'Question_'
      }
    },
    textAnswer_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Application__answers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answers_" },
        ]
      },
      {
        name: "answers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answers_" },
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
        name: "Application_",
        using: "BTREE",
        fields: [
          { name: "Application_" },
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
    ]
  });
	general_event_Application__answers_.associate = models => {
		general_event_Application__answers_.belongsTo(models.general_event_Application_, { foreignKey: "Application_"});
		general_event_Application__answers_.belongsTo(models.general_event_Question_, { foreignKey: "question_"});
		general_event_Application__answers_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		general_event_Application__answers_.hasMany(models.general_event_Application__answers__selectedOptions_, { foreignKey: "answers_"});
	};
return general_event_Application__answers_


};
