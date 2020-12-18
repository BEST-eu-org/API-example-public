/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Team__members_ =  sequelize.define('general_event_Team__members_', {
    members_: {
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
    member_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    since_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Team__members_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "members_" },
        ]
      },
      {
        name: "members_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "members_" },
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
        name: "member_",
        using: "BTREE",
        fields: [
          { name: "member_" },
        ]
      },
      {
        name: "since_",
        using: "BTREE",
        fields: [
          { name: "since_" },
        ]
      },
      {
        name: "Team_",
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
    ]
  });
	general_event_Team__members_.associate = models => {
		general_event_Team__members_.belongsTo(models.general_Person_, { foreignKey: "member_"});
		general_event_Team__members_.belongsTo(models.general_event_Team_, { foreignKey: "Team_"});
	};
return general_event_Team__members_


};
