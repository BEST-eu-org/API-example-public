/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_vote_Session__votingLBGs__delegates_ =  sequelize.define('best_internal_vote_Session__votingLBGs__delegates_', {
    delegates_: {
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
    votingLBGs_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_vote_Session__votingLBGs_',
        key: 'votingLBGs_'
      }
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_vote_Session__votingLBGs__delegates_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "delegates_" },
        ]
      },
      {
        name: "delegates_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "delegates_" },
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
        name: "votingLBGs_",
        using: "BTREE",
        fields: [
          { name: "votingLBGs_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	best_internal_vote_Session__votingLBGs__delegates_.associate = models => {
		best_internal_vote_Session__votingLBGs__delegates_.belongsTo(models.best_internal_vote_Session__votingLBGs_, { foreignKey: "votingLBGs_"});
		best_internal_vote_Session__votingLBGs__delegates_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return best_internal_vote_Session__votingLBGs__delegates_


};
