/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tasklist_Task__involvedPeople_ =  sequelize.define('best_internal_tasklist_Task__involvedPeople_', {
    involvedPeople_: {
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
    Task_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tasklist_Task_',
        key: 'Task_'
      }
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_tasklist_Task__involvedPeople_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "involvedPeople_" },
        ]
      },
      {
        name: "involvedPeople_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "involvedPeople_" },
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
        name: "Task_",
        using: "BTREE",
        fields: [
          { name: "Task_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	best_internal_tasklist_Task__involvedPeople_.associate = models => {
		best_internal_tasklist_Task__involvedPeople_.belongsTo(models.best_internal_tasklist_Task_, { foreignKey: "Task_"});
		best_internal_tasklist_Task__involvedPeople_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return best_internal_tasklist_Task__involvedPeople_


};
