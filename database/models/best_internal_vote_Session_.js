/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Session_ =  sequelize.define('best_internal_vote_Session_', {
    Session_: {
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    withdrawStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    voteStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    voteEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    registerVoteEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quorum_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Session_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Session_" },
        ]
      },
      {
        name: "Session_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Session_" },
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
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
        ]
      },
      {
        name: "withdrawStart_",
        using: "BTREE",
        fields: [
          { name: "withdrawStart_" },
        ]
      },
      {
        name: "voteStart_",
        using: "BTREE",
        fields: [
          { name: "voteStart_" },
        ]
      },
      {
        name: "voteEnd_",
        using: "BTREE",
        fields: [
          { name: "voteEnd_" },
        ]
      },
      {
        name: "registerVoteEnd_",
        using: "BTREE",
        fields: [
          { name: "registerVoteEnd_" },
        ]
      },
      {
        name: "quorum_",
        using: "BTREE",
        fields: [
          { name: "quorum_" },
        ]
      },
    ]
  });
	best_internal_vote_Session_.associate = models => {
		best_internal_vote_Session_.belongsTo(models.best_internal_Event_, { foreignKey: "event_"});
		best_internal_vote_Session_.hasMany(models.best_internal_vote_Session__rounds_, { foreignKey: "Session_"});
		best_internal_vote_Session_.hasMany(models.best_internal_vote_Session__votingLBGs_, { foreignKey: "Session_"});
	};
return best_internal_vote_Session_


};
