/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Sequence__options_ =  sequelize.define('best_internal_vote_Sequence__options_', {
    options_: {
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
    VoteOption_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_VoteOption_',
        key: 'VoteOption_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Sequence__options_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "options_" },
        ]
      },
      {
        name: "options_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "options_" },
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
        name: "VoteOption_",
        using: "BTREE",
        fields: [
          { name: "VoteOption_" },
        ]
      },
    ]
  });
	best_internal_vote_Sequence__options_.associate = models => {
		best_internal_vote_Sequence__options_.belongsTo(models.best_internal_vote_Sequence_, { foreignKey: "Sequence_"});
		best_internal_vote_Sequence__options_.belongsTo(models.best_internal_vote_VoteOption_, { foreignKey: "VoteOption_"});
	};
return best_internal_vote_Sequence__options_


};
