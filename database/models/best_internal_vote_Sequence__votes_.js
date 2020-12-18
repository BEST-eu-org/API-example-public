/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Sequence__votes_ =  sequelize.define('best_internal_vote_Sequence__votes_', {
    votes_: {
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
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    delegate_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    voteOption_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_VoteOption_',
        key: 'VoteOption_'
      }
    },
    otherOptions_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Sequence__votes_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "votes_" },
        ]
      },
      {
        name: "votes_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "votes_" },
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
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "delegate_",
        using: "BTREE",
        fields: [
          { name: "delegate_" },
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
        name: "otherOptions_",
        using: "BTREE",
        fields: [
          { name: "otherOptions_" },
        ]
      },
    ]
  });
	best_internal_vote_Sequence__votes_.associate = models => {
		best_internal_vote_Sequence__votes_.belongsTo(models.best_internal_vote_Sequence_, { foreignKey: "Sequence_"});
		best_internal_vote_Sequence__votes_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		best_internal_vote_Sequence__votes_.belongsTo(models.best_internal_Student_, { foreignKey: "delegate_"});
		best_internal_vote_Sequence__votes_.belongsTo(models.best_internal_vote_VoteOption_, { foreignKey: "voteOption_"});
	};
return best_internal_vote_Sequence__votes_


};
