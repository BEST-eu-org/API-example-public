/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_VoteOption_ =  sequelize.define('best_internal_vote_VoteOption_', {
    VoteOption_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    round_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_Round_',
        key: 'Round_'
      }
    },
    number_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_VoteOption_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VoteOption_" },
        ]
      },
      {
        name: "VoteOption_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VoteOption_" },
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
        name: "round_",
        using: "BTREE",
        fields: [
          { name: "round_" },
        ]
      },
      {
        name: "number_",
        using: "BTREE",
        fields: [
          { name: "number_" },
        ]
      },
    ]
  });
	best_internal_vote_VoteOption_.associate = models => {
		best_internal_vote_VoteOption_.hasMany(models.best_internal_vote_Round_, { foreignKey: "selectedOption_"});
		best_internal_vote_VoteOption_.hasMany(models.best_internal_vote_Sequence__options_, { foreignKey: "VoteOption_"});
		best_internal_vote_VoteOption_.hasMany(models.best_internal_vote_Sequence__secretVotes_, { foreignKey: "voteOption_"});
		best_internal_vote_VoteOption_.hasMany(models.best_internal_vote_Sequence__votes_, { foreignKey: "voteOption_"});
		best_internal_vote_VoteOption_.belongsTo(models.best_internal_vote_Round_, { foreignKey: "round_"});
	};
return best_internal_vote_VoteOption_


};
