/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Application__activities_ =  sequelize.define('general_event_Application__activities_', {
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
    activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Activity_',
        key: 'Activity_'
      }
    },
    Application_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Application_',
        key: 'Application_'
      }
    },
    acceptedStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Application__activities_',
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
        name: "activity_",
        using: "BTREE",
        fields: [
          { name: "activity_" },
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
        name: "acceptedStatus_",
        using: "BTREE",
        fields: [
          { name: "acceptedStatus_" },
        ]
      },
    ]
  });
	general_event_Application__activities_.associate = models => {
		general_event_Application__activities_.belongsTo(models.general_event_Activity_, { foreignKey: "activity_"});
		general_event_Application__activities_.belongsTo(models.general_event_Application_, { foreignKey: "Application_"});
	};
return general_event_Application__activities_


};
