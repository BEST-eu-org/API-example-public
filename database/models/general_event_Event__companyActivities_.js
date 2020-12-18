/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event__companyActivities_ =  sequelize.define('general_event_Event__companyActivities_', {
    companyActivities_: {
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
    }
  }, {
    sequelize,
    tableName: 'general_event_Event__companyActivities_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyActivities_" },
        ]
      },
      {
        name: "companyActivities_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyActivities_" },
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
    ]
  });
	general_event_Event__companyActivities_.associate = models => {
		general_event_Event__companyActivities_.belongsTo(models.general_event_Event_, { foreignKey: "Event_"});
		general_event_Event__companyActivities_.belongsTo(models.general_event_ActivityType_, { foreignKey: "ActivityType_"});
	};
return general_event_Event__companyActivities_


};
