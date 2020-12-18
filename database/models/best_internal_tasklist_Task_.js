/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tasklist_Task_ =  sequelize.define('best_internal_tasklist_Task_', {
    Task_: {
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
    ProjectName_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Deadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    SubmittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    emailTo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tasklist_Task_',
        key: 'Task_'
      }
    },
    Priority_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Difficulty_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WorkTime_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    threadLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    threadRoot_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tasklist_Task_',
        key: 'Task_'
      }
    },
    threadPath_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    project_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Project_',
        key: 'Project_'
      }
    },
    percentageCompleted_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tasklist_Task_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Task_" },
        ]
      },
      {
        name: "Task_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Task_" },
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
        name: "Deadline_",
        using: "BTREE",
        fields: [
          { name: "Deadline_" },
        ]
      },
      {
        name: "Status_",
        using: "BTREE",
        fields: [
          { name: "Status_" },
        ]
      },
      {
        name: "Responsible_",
        using: "BTREE",
        fields: [
          { name: "Responsible_" },
        ]
      },
      {
        name: "SubmittedBy_",
        using: "BTREE",
        fields: [
          { name: "SubmittedBy_" },
        ]
      },
      {
        name: "emailTo_",
        using: "BTREE",
        fields: [
          { name: "emailTo_" },
        ]
      },
      {
        name: "parent_",
        using: "BTREE",
        fields: [
          { name: "parent_" },
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
        name: "Priority_",
        using: "BTREE",
        fields: [
          { name: "Priority_" },
        ]
      },
      {
        name: "Difficulty_",
        using: "BTREE",
        fields: [
          { name: "Difficulty_" },
        ]
      },
      {
        name: "WorkTime_",
        using: "BTREE",
        fields: [
          { name: "WorkTime_" },
        ]
      },
      {
        name: "threadRoot_",
        using: "BTREE",
        fields: [
          { name: "threadRoot_" },
        ]
      },
      {
        name: "threadLevel_",
        using: "BTREE",
        fields: [
          { name: "threadLevel_" },
        ]
      },
      {
        name: "project_",
        using: "BTREE",
        fields: [
          { name: "project_" },
        ]
      },
      {
        name: "percentageCompleted_",
        using: "BTREE",
        fields: [
          { name: "percentageCompleted_" },
        ]
      },
    ]
  });
	best_internal_tasklist_Task_.associate = models => {
		best_internal_tasklist_Task_.belongsTo(models.best_internal_Student_, { foreignKey: "Responsible_"});
		best_internal_tasklist_Task_.belongsTo(models.best_internal_Student_, { foreignKey: "SubmittedBy_"});
		best_internal_tasklist_Task_.belongsTo(models.best_internal_tasklist_Task_, { foreignKey: "parent_"});
		best_internal_tasklist_Task_.hasMany(models.best_internal_tasklist_Task_, { foreignKey: "parent_"});
		best_internal_tasklist_Task_.belongsTo(models.best_internal_tasklist_Task_, { foreignKey: "threadRoot_"});
		best_internal_tasklist_Task_.hasMany(models.best_internal_tasklist_Task_, { foreignKey: "threadRoot_"});
		best_internal_tasklist_Task_.belongsTo(models.general_Project_, { foreignKey: "project_"});
		best_internal_tasklist_Task_.hasMany(models.best_internal_tasklist_Task__Comments_, { foreignKey: "Task_"});
		best_internal_tasklist_Task_.hasMany(models.best_internal_tasklist_Task__involvedPeople_, { foreignKey: "Task_"});
	};
return best_internal_tasklist_Task_


};
