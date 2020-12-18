/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event__activities_ =  sequelize.define('general_event_Event__activities_', {
    activities_: {
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
    ActivityType_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_ActivityType_',
        key: 'ActivityType_'
      }
    },
    activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Activity_',
        key: 'Activity_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Event__activities_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activities_" },
        ]
      },
      {
        name: "activities_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activities_" },
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
        name: "ActivityType_",
        using: "BTREE",
        fields: [
          { name: "ActivityType_" },
        ]
      },
      {
        name: "activity_",
        using: "BTREE",
        fields: [
          { name: "activity_" },
        ]
      },
    ]
  });
	general_event_Event__activities_.associate = models => {
		general_event_Event__activities_.belongsTo(models.general_event_Event_, { foreignKey: "Event_"});
		general_event_Event__activities_.belongsTo(models.general_event_ActivityType_, { foreignKey: "ActivityType_"});
		general_event_Event__activities_.belongsTo(models.general_event_Activity_, { foreignKey: "activity_"});
	};
return general_event_Event__activities_


};
