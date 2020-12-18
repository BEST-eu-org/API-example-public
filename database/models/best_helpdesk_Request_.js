/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Request_ =  sequelize.define('best_helpdesk_Request_', {
    Request_: {
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
    ref_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sender_name_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sender_surname_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    sender_email_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_RequestType_',
        key: 'RequestType_'
      }
    },
    date_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    body_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    solver_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    },
    old_priority_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    old_status_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    old_solver_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    old_type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sender_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    sender_browser_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submittedFrom_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    issueRef_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Issue_',
        key: 'Issue_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Request_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Request_" },
        ]
      },
      {
        name: "Request_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Request_" },
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
        name: "sender_name_",
        using: "BTREE",
        fields: [
          { name: "sender_name_" },
        ]
      },
      {
        name: "sender_surname_",
        using: "BTREE",
        fields: [
          { name: "sender_surname_" },
        ]
      },
      {
        name: "sender_email_",
        using: "BTREE",
        fields: [
          { name: "sender_email_" },
        ]
      },
      {
        name: "sender_",
        using: "BTREE",
        fields: [
          { name: "sender_" },
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
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
        ]
      },
      {
        name: "priority_",
        using: "BTREE",
        fields: [
          { name: "priority_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "solver_",
        using: "BTREE",
        fields: [
          { name: "solver_" },
        ]
      },
      {
        name: "submittedFrom_",
        using: "BTREE",
        fields: [
          { name: "submittedFrom_" },
        ]
      },
      {
        name: "issueRef_",
        using: "BTREE",
        fields: [
          { name: "issueRef_" },
        ]
      },
    ]
  });
	best_helpdesk_Request_.associate = models => {
		best_helpdesk_Request_.hasMany(models.best_helpdesk_Reply_, { foreignKey: "request_"});
		best_helpdesk_Request_.belongsTo(models.best_helpdesk_RequestType_, { foreignKey: "type_"});
		best_helpdesk_Request_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "solver_"});
		best_helpdesk_Request_.belongsTo(models.general_Person_, { foreignKey: "sender_"});
		best_helpdesk_Request_.belongsTo(models.best_helpdesk_Issue_, { foreignKey: "issueRef_"});
		best_helpdesk_Request_.hasMany(models.best_helpdesk_Request__history_, { foreignKey: "Request_"});
		best_helpdesk_Request_.hasMany(models.best_helpdesk_Request__history_, { foreignKey: "statusModifiedTo_"});
		best_helpdesk_Request_.hasMany(models.best_helpdesk_Solver__myRatings_, { foreignKey: "request_"});
	};
return best_helpdesk_Request_


};
