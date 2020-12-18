/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Issue__history_ =  sequelize.define('best_helpdesk_Issue__history_', {
    history_: {
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
    statusModifiedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    },
    statusModifiedSince_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Issue_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Issue_',
        key: 'Issue_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Issue__history_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_" },
        ]
      },
      {
        name: "history_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_" },
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
        name: "statusModifiedBy_",
        using: "BTREE",
        fields: [
          { name: "statusModifiedBy_" },
        ]
      },
      {
        name: "statusModifiedSince_",
        using: "BTREE",
        fields: [
          { name: "statusModifiedSince_" },
        ]
      },
      {
        name: "Issue_",
        using: "BTREE",
        fields: [
          { name: "Issue_" },
        ]
      },
    ]
  });
	best_helpdesk_Issue__history_.associate = models => {
		best_helpdesk_Issue__history_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "statusModifiedBy_"});
		best_helpdesk_Issue__history_.belongsTo(models.best_helpdesk_Issue_, { foreignKey: "Issue_"});
	};
return best_helpdesk_Issue__history_


};
