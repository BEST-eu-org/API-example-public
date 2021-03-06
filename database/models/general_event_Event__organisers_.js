/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event__organisers_ =  sequelize.define('general_event_Event__organisers_', {
    organisers_: {
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
    organiser_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    responsibility_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Event__organisers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "organisers_" },
        ]
      },
      {
        name: "organisers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "organisers_" },
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
        name: "organiser_",
        using: "BTREE",
        fields: [
          { name: "organiser_" },
        ]
      },
      {
        name: "responsibility_",
        using: "BTREE",
        fields: [
          { name: "responsibility_" },
        ]
      },
    ]
  });
	general_event_Event__organisers_.associate = models => {
		general_event_Event__organisers_.belongsTo(models.general_event_Event_, { foreignKey: "Event_"});
		general_event_Event__organisers_.belongsTo(models.general_Person_, { foreignKey: "organiser_"});
	};
return general_event_Event__organisers_


};
