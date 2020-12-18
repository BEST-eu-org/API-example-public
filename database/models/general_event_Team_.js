/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Team_ =  sequelize.define('general_event_Team_', {
    Team_: {
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
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pass_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Activity_',
        key: 'Activity_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Team_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
      {
        name: "Team_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
      {
        name: "name_activity",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name_" },
          { name: "activity_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "pass_",
        using: "BTREE",
        fields: [
          { name: "pass_" },
        ]
      },
      {
        name: "owner_",
        using: "BTREE",
        fields: [
          { name: "owner_" },
        ]
      },
      {
        name: "activity_",
        using: "BTREE",
        fields: [
          { name: "activity_" },
        ]
      },
    ]
  });
	general_event_Team_.associate = models => {
		general_event_Team_.belongsTo(models.general_Person_, { foreignKey: "owner_"});
		general_event_Team_.belongsTo(models.general_event_Activity_, { foreignKey: "activity_"});
		general_event_Team_.hasMany(models.general_event_Team__members_, { foreignKey: "Team_"});
	};
return general_event_Team_


};
