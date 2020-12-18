/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Request__history_ =  sequelize.define('best_helpdesk_Request__history_', {
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
    Request_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Request_',
        key: 'Request_'
      }
    },
    statusModifiedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    },
    statusModifiedTo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Request_',
        key: 'Request_'
      }
    },
    typeModifiedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    },
    typeModifiedTo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_RequestType_',
        key: 'RequestType_'
      }
    },
    statusModifiedToStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusModifiedSince_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Request__history_',
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
        name: "Request_",
        using: "BTREE",
        fields: [
          { name: "Request_" },
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
        name: "statusModifiedTo_",
        using: "BTREE",
        fields: [
          { name: "statusModifiedTo_" },
        ]
      },
      {
        name: "typeModifiedBy_",
        using: "BTREE",
        fields: [
          { name: "typeModifiedBy_" },
        ]
      },
      {
        name: "typeModifiedTo_",
        using: "BTREE",
        fields: [
          { name: "typeModifiedTo_" },
        ]
      },
      {
        name: "statusModifiedToStatus_",
        using: "BTREE",
        fields: [
          { name: "statusModifiedToStatus_" },
        ]
      },
      {
        name: "statusModifiedSince_",
        using: "BTREE",
        fields: [
          { name: "statusModifiedSince_" },
        ]
      },
    ]
  });
	best_helpdesk_Request__history_.associate = models => {
		best_helpdesk_Request__history_.belongsTo(models.best_helpdesk_Request_, { foreignKey: "Request_"});
		best_helpdesk_Request__history_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "statusModifiedBy_"});
		best_helpdesk_Request__history_.belongsTo(models.best_helpdesk_Request_, { foreignKey: "statusModifiedTo_"});
		best_helpdesk_Request__history_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "typeModifiedBy_"});
		best_helpdesk_Request__history_.belongsTo(models.best_helpdesk_RequestType_, { foreignKey: "typeModifiedTo_"});
	};
return best_helpdesk_Request__history_


};
