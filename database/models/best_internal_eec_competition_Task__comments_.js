/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_eec_competition_Task__comments_ =  sequelize.define('best_internal_eec_competition_Task__comments_', {
    comments_: {
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
        model: 'best_internal_eec_competition_Task_',
        key: 'Task_'
      }
    },
    data_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    submittedOn_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_eec_competition_Task__comments_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comments_" },
        ]
      },
      {
        name: "comments_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comments_" },
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
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "submittedOn_",
        using: "BTREE",
        fields: [
          { name: "submittedOn_" },
        ]
      },
    ]
  });
	best_internal_eec_competition_Task__comments_.associate = models => {
		best_internal_eec_competition_Task__comments_.belongsTo(models.best_internal_eec_competition_Task_, { foreignKey: "Task_"});
		best_internal_eec_competition_Task__comments_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
	};
return best_internal_eec_competition_Task__comments_


};
