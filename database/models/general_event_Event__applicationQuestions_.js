/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event__applicationQuestions_ =  sequelize.define('general_event_Event__applicationQuestions_', {
    applicationQuestions_: {
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
    Event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
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
    visible_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Activity_',
        key: 'Activity_'
      }
    },
    target_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Event__applicationQuestions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "applicationQuestions_" },
        ]
      },
      {
        name: "applicationQuestions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "applicationQuestions_" },
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
        name: "Event_",
        using: "BTREE",
        fields: [
          { name: "Event_" },
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
        name: "visible_",
        using: "BTREE",
        fields: [
          { name: "visible_" },
        ]
      },
      {
        name: "activity_",
        using: "BTREE",
        fields: [
          { name: "activity_" },
        ]
      },
      {
        name: "target_",
        using: "BTREE",
        fields: [
          { name: "target_" },
        ]
      },
    ]
  });
	general_event_Event__applicationQuestions_.associate = models => {
		general_event_Event__applicationQuestions_.belongsTo(models.general_event_Event_, { foreignKey: "Event_"});
		general_event_Event__applicationQuestions_.belongsTo(models.general_event_Question_, { foreignKey: "question_"});
		general_event_Event__applicationQuestions_.belongsTo(models.general_event_Activity_, { foreignKey: "activity_"});
	};
return general_event_Event__applicationQuestions_


};
