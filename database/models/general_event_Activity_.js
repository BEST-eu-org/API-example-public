/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Activity_ =  sequelize.define('general_event_Activity_', {
    Activity_: {
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
    descr_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_ActivityType_',
        key: 'ActivityType_'
      }
    },
    teamApplicable_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxTeamMembers_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minTeamMembers_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Activity_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Activity_" },
        ]
      },
      {
        name: "Activity_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Activity_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "teamApplicable_",
        using: "BTREE",
        fields: [
          { name: "teamApplicable_" },
        ]
      },
      {
        name: "maxTeamMembers_",
        using: "BTREE",
        fields: [
          { name: "maxTeamMembers_" },
        ]
      },
      {
        name: "minTeamMembers_",
        using: "BTREE",
        fields: [
          { name: "minTeamMembers_" },
        ]
      },
    ]
  });
	general_event_Activity_.associate = models => {
		general_event_Activity_.belongsTo(models.general_event_ActivityType_, { foreignKey: "type_"});
		general_event_Activity_.hasMany(models.general_event_Application__activities_, { foreignKey: "activity_"});
		general_event_Activity_.hasMany(models.general_event_Event__activities_, { foreignKey: "activity_"});
		general_event_Activity_.hasMany(models.general_event_Event__applicationQuestions_, { foreignKey: "activity_"});
		general_event_Activity_.hasMany(models.general_event_Team_, { foreignKey: "activity_"});
	};
return general_event_Activity_


};
