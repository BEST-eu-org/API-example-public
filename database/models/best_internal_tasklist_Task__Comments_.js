/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tasklist_Task__Comments_ =  sequelize.define('best_internal_tasklist_Task__Comments_', {
    Comments_: {
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
    data_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SubmittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_tasklist_Task__Comments_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Comments_" },
        ]
      },
      {
        name: "Comments_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Comments_" },
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
        name: "SubmittedBy_",
        using: "BTREE",
        fields: [
          { name: "SubmittedBy_" },
        ]
      },
      {
        name: "Task_",
        using: "BTREE",
        fields: [
          { name: "Task_" },
        ]
      },
    ]
  });
	best_internal_tasklist_Task__Comments_.associate = models => {
		best_internal_tasklist_Task__Comments_.belongsTo(models.best_internal_tasklist_Task_, { foreignKey: "Task_"});
		best_internal_tasklist_Task__Comments_.belongsTo(models.best_internal_Student_, { foreignKey: "SubmittedBy_"});
	};
return best_internal_tasklist_Task__Comments_


};
