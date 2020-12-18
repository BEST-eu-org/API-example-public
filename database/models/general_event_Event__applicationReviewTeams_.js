/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event__applicationReviewTeams_ =  sequelize.define('general_event_Event__applicationReviewTeams_', {
    applicationReviewTeams_: {
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
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    role_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Event__applicationReviewTeams_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "applicationReviewTeams_" },
        ]
      },
      {
        name: "applicationReviewTeams_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "applicationReviewTeams_" },
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
        name: "team_",
        using: "BTREE",
        fields: [
          { name: "team_" },
        ]
      },
      {
        name: "role_",
        using: "BTREE",
        fields: [
          { name: "role_" },
        ]
      },
      {
        name: "Event_",
        using: "BTREE",
        fields: [
          { name: "Event_" },
        ]
      },
    ]
  });
	general_event_Event__applicationReviewTeams_.associate = models => {
		general_event_Event__applicationReviewTeams_.belongsTo(models.general_Team_, { foreignKey: "team_"});
		general_event_Event__applicationReviewTeams_.belongsTo(models.general_event_Event_, { foreignKey: "Event_"});
	};
return general_event_Event__applicationReviewTeams_


};
