/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Reply_ =  sequelize.define('best_helpdesk_Reply_', {
    Reply_: {
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
    sender_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    request_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Request_',
        key: 'Request_'
      }
    },
    receiverEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    old_request_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_sender_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    senderName_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    senderSurname_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    senderEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bhsSender_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Reply_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Reply_" },
        ]
      },
      {
        name: "Reply_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Reply_" },
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
        name: "sender_",
        using: "BTREE",
        fields: [
          { name: "sender_" },
        ]
      },
      {
        name: "request_",
        using: "BTREE",
        fields: [
          { name: "request_" },
        ]
      },
      {
        name: "receiverEmail_",
        using: "BTREE",
        fields: [
          { name: "receiverEmail_" },
        ]
      },
      {
        name: "senderName_",
        using: "BTREE",
        fields: [
          { name: "senderName_" },
        ]
      },
      {
        name: "senderSurname_",
        using: "BTREE",
        fields: [
          { name: "senderSurname_" },
        ]
      },
      {
        name: "senderEmail_",
        using: "BTREE",
        fields: [
          { name: "senderEmail_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "bhsSender_",
        using: "BTREE",
        fields: [
          { name: "bhsSender_" },
        ]
      },
    ]
  });
	best_helpdesk_Reply_.associate = models => {
		best_helpdesk_Reply_.belongsTo(models.general_Person_, { foreignKey: "sender_"});
		best_helpdesk_Reply_.belongsTo(models.best_helpdesk_Request_, { foreignKey: "request_"});
		best_helpdesk_Reply_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "bhsSender_"});
	};
return best_helpdesk_Reply_


};
