/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Document__events_ =  sequelize.define('general_archive_Document__events_', {
    events_: {
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
    Document_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document_',
        key: 'Document_'
      }
    },
    Event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Document__events_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "events_" },
        ]
      },
      {
        name: "events_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "events_" },
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
        name: "Document_",
        using: "BTREE",
        fields: [
          { name: "Document_" },
        ]
      },
      {
        name: "Event_",
        using: "BTREE",
        fields: [
          { name: "Event_" },
        ]
      },
    ]
  });
	general_archive_Document__events_.associate = models => {
		general_archive_Document__events_.belongsTo(models.general_archive_Document_, { foreignKey: "Document_"});
		general_archive_Document__events_.belongsTo(models.best_internal_Event_, { foreignKey: "Event_"});
	};
return general_archive_Document__events_


};
