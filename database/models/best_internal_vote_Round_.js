/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Round_ =  sequelize.define('best_internal_vote_Round_', {
    Round_: {
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
    proposal_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Document_',
        key: 'Document_'
      }
    },
    multipleOption_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secretBallot_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approvalPercentage_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    realApprovalPercentage_: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    selectedOption_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_VoteOption_',
        key: 'VoteOption_'
      }
    },
    countAbstentions_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quorum_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proposalFile_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    },
    viewableResults_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Round_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Round_" },
        ]
      },
      {
        name: "Round_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Round_" },
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
        name: "proposal_",
        using: "BTREE",
        fields: [
          { name: "proposal_" },
        ]
      },
      {
        name: "multipleOption_",
        using: "BTREE",
        fields: [
          { name: "multipleOption_" },
        ]
      },
      {
        name: "secretBallot_",
        using: "BTREE",
        fields: [
          { name: "secretBallot_" },
        ]
      },
      {
        name: "approvalPercentage_",
        using: "BTREE",
        fields: [
          { name: "approvalPercentage_" },
        ]
      },
      {
        name: "realApprovalPercentage_",
        using: "BTREE",
        fields: [
          { name: "realApprovalPercentage_" },
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
        name: "selectedOption_",
        using: "BTREE",
        fields: [
          { name: "selectedOption_" },
        ]
      },
      {
        name: "countAbstentions_",
        using: "BTREE",
        fields: [
          { name: "countAbstentions_" },
        ]
      },
      {
        name: "quorum_",
        using: "BTREE",
        fields: [
          { name: "quorum_" },
        ]
      },
      {
        name: "proposalFile_",
        using: "BTREE",
        fields: [
          { name: "proposalFile_" },
        ]
      },
      {
        name: "viewableResults_",
        using: "BTREE",
        fields: [
          { name: "viewableResults_" },
        ]
      },
    ]
  });
	best_internal_vote_Round_.associate = models => {
		best_internal_vote_Round_.belongsTo(models.general_archive_Document_, { foreignKey: "proposal_"});
		best_internal_vote_Round_.belongsTo(models.best_internal_vote_VoteOption_, { foreignKey: "selectedOption_"});
		best_internal_vote_Round_.belongsTo(models.general_archive_File_, { foreignKey: "proposalFile_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Round__comments_, { foreignKey: "Round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Round__secretVotes_, { foreignKey: "Round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Round__votes_, { foreignKey: "Round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Round__votingLBGs_, { foreignKey: "Round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Round__withdraws_, { foreignKey: "Round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Sequence_, { foreignKey: "round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_Session__rounds_, { foreignKey: "round_"});
		best_internal_vote_Round_.hasMany(models.best_internal_vote_VoteOption_, { foreignKey: "round_"});
	};
return best_internal_vote_Round_


};
