/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Session__rounds_ =  sequelize.define('best_internal_vote_Session__rounds_', {
    rounds_: {
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
    orderId_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Session_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_Session_',
        key: 'Session_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Session__rounds_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rounds_" },
        ]
      },
      {
        name: "rounds_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rounds_" },
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
        name: "orderId_",
        using: "BTREE",
        fields: [
          { name: "orderId_" },
        ]
      },
      {
        name: "Session_",
        using: "BTREE",
        fields: [
          { name: "Session_" },
        ]
      },
    ]
  });
	best_internal_vote_Session__rounds_.associate = models => {
		best_internal_vote_Session__rounds_.belongsTo(models.best_internal_vote_Round_, { foreignKey: "round_"});
		best_internal_vote_Session__rounds_.belongsTo(models.best_internal_vote_Session_, { foreignKey: "Session_"});
	};
return best_internal_vote_Session__rounds_


};
