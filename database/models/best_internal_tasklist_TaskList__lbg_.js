/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tasklist_TaskList__lbg_ =  sequelize.define('best_internal_tasklist_TaskList__lbg_', {
    lbg_: {
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
    TaskList_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tasklist_TaskList_',
        key: 'TaskList_'
      }
    },
    Lbg__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_tasklist_TaskList__lbg_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "lbg_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lbg_" },
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
        name: "TaskList_",
        using: "BTREE",
        fields: [
          { name: "TaskList_" },
        ]
      },
      {
        name: "Lbg__",
        using: "BTREE",
        fields: [
          { name: "Lbg__" },
        ]
      },
    ]
  });
	best_internal_tasklist_TaskList__lbg_.associate = models => {
		best_internal_tasklist_TaskList__lbg_.belongsTo(models.best_internal_tasklist_TaskList_, { foreignKey: "TaskList_"});
		best_internal_tasklist_TaskList__lbg_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg__"});
	};
return best_internal_tasklist_TaskList__lbg_


};
