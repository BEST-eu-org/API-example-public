/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Team__coordinators_ =  sequelize.define('general_Team__coordinators_', {
    coordinators_: {
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
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
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
    }
  }, {
    sequelize,
    tableName: 'general_Team__coordinators_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coordinators_" },
        ]
      },
      {
        name: "coordinators_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coordinators_" },
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
        name: "Team_",
        using: "BTREE",
        fields: [
          { name: "Team_" },
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
    ]
  });
	general_Team__coordinators_.associate = models => {
		general_Team__coordinators_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
		general_Team__coordinators_.belongsTo(models.general_Person_, { foreignKey: "member_"});
	};
return general_Team__coordinators_


};
