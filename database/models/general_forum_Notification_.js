/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_forum_Notification_ =  sequelize.define('general_forum_Notification_', {
    Notification_: {
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
      type: DataTypes.STRING(40),
      allowNull: true
    },
    notificationText_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    thread_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_forum_Thread_',
        key: 'Thread_'
      }
    },
    expires_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_forum_Notification_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Notification_" },
        ]
      },
      {
        name: "Notification_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Notification_" },
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
        name: "thread_",
        using: "BTREE",
        fields: [
          { name: "thread_" },
        ]
      },
      {
        name: "expires_",
        using: "BTREE",
        fields: [
          { name: "expires_" },
        ]
      },
      {
        name: "createdBy_",
        using: "BTREE",
        fields: [
          { name: "createdBy_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
    ]
  });
	general_forum_Notification_.associate = models => {
		general_forum_Notification_.belongsTo(models.general_forum_Thread_, { foreignKey: "thread_"});
		general_forum_Notification_.belongsTo(models.general_Person_, { foreignKey: "createdBy_"});
	};
return general_forum_Notification_


};
