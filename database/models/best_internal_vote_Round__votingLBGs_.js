/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Round__votingLBGs_ =  sequelize.define('best_internal_vote_Round__votingLBGs_', {
    votingLBGs_: {
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
    Round_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_Round_',
        key: 'Round_'
      }
    },
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Round__votingLBGs_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "votingLBGs_" },
        ]
      },
      {
        name: "votingLBGs_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "votingLBGs_" },
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
        name: "Round_",
        using: "BTREE",
        fields: [
          { name: "Round_" },
        ]
      },
      {
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
        ]
      },
    ]
  });
	best_internal_vote_Round__votingLBGs_.associate = models => {
		best_internal_vote_Round__votingLBGs_.belongsTo(models.best_internal_vote_Round_, { foreignKey: "Round_"});
		best_internal_vote_Round__votingLBGs_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
	};
return best_internal_vote_Round__votingLBGs_


};
