/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event__materials_ =  sequelize.define('general_event_Event__materials_', {
    materials_: {
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
    Event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    file_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Event__materials_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "materials_" },
        ]
      },
      {
        name: "materials_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "materials_" },
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
        name: "Event_",
        using: "BTREE",
        fields: [
          { name: "Event_" },
        ]
      },
      {
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
      {
        name: "file_",
        using: "BTREE",
        fields: [
          { name: "file_" },
        ]
      },
    ]
  });
	general_event_Event__materials_.associate = models => {
		general_event_Event__materials_.belongsTo(models.general_event_Event_, { foreignKey: "Event_"});
		general_event_Event__materials_.belongsTo(models.general_archive_File_, { foreignKey: "file_"});
	};
return general_event_Event__materials_


};
