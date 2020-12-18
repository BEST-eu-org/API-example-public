/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tasklist_TaskList_ =  sequelize.define('best_internal_tasklist_TaskList_', {
    TaskList_: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_tasklist_TaskList_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TaskList_" },
        ]
      },
      {
        name: "TaskList_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TaskList_" },
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
        name: "team_",
        using: "BTREE",
        fields: [
          { name: "team_" },
        ]
      },
      {
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
        ]
      },
    ]
  });
	best_internal_tasklist_TaskList_.associate = models => {
		best_internal_tasklist_TaskList_.belongsTo(models.general_Team_, { foreignKey: "team_"});
		best_internal_tasklist_TaskList_.belongsTo(models.best_internal_Event_, { foreignKey: "event_"});
		best_internal_tasklist_TaskList_.hasMany(models.best_internal_tasklist_TaskList__lbg_, { foreignKey: "TaskList_"});
	};
return best_internal_tasklist_TaskList_


};
