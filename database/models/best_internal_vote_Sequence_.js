/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Sequence_ =  sequelize.define('best_internal_vote_Sequence_', {
    Sequence_: {
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
    voteStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    voteEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Sequence_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Sequence_" },
        ]
      },
      {
        name: "Sequence_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Sequence_" },
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
    ]
  });
	best_internal_vote_Sequence_.associate = models => {
		best_internal_vote_Sequence_.belongsTo(models.best_internal_vote_Round_, { foreignKey: "round_"});
		best_internal_vote_Sequence_.hasMany(models.best_internal_vote_Sequence__options_, { foreignKey: "Sequence_"});
		best_internal_vote_Sequence_.hasMany(models.best_internal_vote_Sequence__secretVotes_, { foreignKey: "Sequence_"});
		best_internal_vote_Sequence_.hasMany(models.best_internal_vote_Sequence__votes_, { foreignKey: "Sequence_"});
	};
return best_internal_vote_Sequence_


};
