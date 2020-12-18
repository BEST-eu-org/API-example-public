/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Session__votingLBGs_ =  sequelize.define('best_internal_vote_Session__votingLBGs_', {
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
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    passwordMD5_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    voted_: {
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
    tableName: 'best_internal_vote_Session__votingLBGs_',
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
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "passwordMD5_",
        using: "BTREE",
        fields: [
          { name: "passwordMD5_" },
        ]
      },
      {
        name: "voted_",
        using: "BTREE",
        fields: [
          { name: "voted_" },
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
	best_internal_vote_Session__votingLBGs_.associate = models => {
		best_internal_vote_Session__votingLBGs_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		best_internal_vote_Session__votingLBGs_.belongsTo(models.best_internal_vote_Session_, { foreignKey: "Session_"});
		best_internal_vote_Session__votingLBGs_.hasMany(models.best_internal_vote_Session__votingLBGs__delegates_, { foreignKey: "votingLBGs_"});
	};
return best_internal_vote_Session__votingLBGs_


};
