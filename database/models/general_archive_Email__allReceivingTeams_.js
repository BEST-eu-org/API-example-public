/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Email__allReceivingTeams_ =  sequelize.define('general_archive_Email__allReceivingTeams_', {
    allReceivingTeams_: {
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
    Email_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Email_',
        key: 'Email_'
      }
    },
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Email__allReceivingTeams_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "allReceivingTeams_" },
        ]
      },
      {
        name: "allReceivingTeams_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "allReceivingTeams_" },
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
        name: "Email_",
        using: "BTREE",
        fields: [
          { name: "Email_" },
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
	general_archive_Email__allReceivingTeams_.associate = models => {
		general_archive_Email__allReceivingTeams_.belongsTo(models.general_archive_Email_, { foreignKey: "Email_"});
		general_archive_Email__allReceivingTeams_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
	};
return general_archive_Email__allReceivingTeams_


};
