/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Sequence__secretVotes_ =  sequelize.define('best_internal_vote_Sequence__secretVotes_', {
    secretVotes_: {
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
    Sequence_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_Sequence_',
        key: 'Sequence_'
      }
    },
    voterSerialNo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    voteOption_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_VoteOption_',
        key: 'VoteOption_'
      }
    },
    blank_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Sequence__secretVotes_',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "secretVotes_" },
        ]
      },
      {
        name: "secretVotes_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "secretVotes_" },
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
        name: "Sequence_",
        using: "BTREE",
        fields: [
          { name: "Sequence_" },
        ]
      },
      {
        name: "voterSerialNo_",
        using: "BTREE",
        fields: [
          { name: "voterSerialNo_" },
        ]
      },
      {
        name: "voteOption_",
        using: "BTREE",
        fields: [
          { name: "voteOption_" },
        ]
      },
      {
        name: "blank_",
        using: "BTREE",
        fields: [
          { name: "blank_" },
        ]
      },
    ]
  });
	best_internal_vote_Sequence__secretVotes_.associate = models => {
		best_internal_vote_Sequence__secretVotes_.belongsTo(models.best_internal_vote_Sequence_, { foreignKey: "Sequence_"});
		best_internal_vote_Sequence__secretVotes_.belongsTo(models.best_internal_vote_VoteOption_, { foreignKey: "voteOption_"});
	};
return best_internal_vote_Sequence__secretVotes_


};
