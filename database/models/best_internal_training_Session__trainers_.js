/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Session__trainers_ =  sequelize.define('best_internal_training_Session__trainers_', {
    trainers_: {
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
    Session_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Session_',
        key: 'Session_'
      }
    },
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Trainer_',
        key: 'Trainer_'
      }
    },
    dhours_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Session__trainers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trainers_" },
        ]
      },
      {
        name: "trainers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trainers_" },
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
        name: "Session_",
        using: "BTREE",
        fields: [
          { name: "Session_" },
        ]
      },
      {
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "dhours_",
        using: "BTREE",
        fields: [
          { name: "dhours_" },
        ]
      },
    ]
  });
	best_internal_training_Session__trainers_.associate = models => {
		best_internal_training_Session__trainers_.belongsTo(models.best_internal_training_Session_, { foreignKey: "Session_"});
		best_internal_training_Session__trainers_.belongsTo(models.best_internal_training_Trainer_, { foreignKey: "person_"});
	};
return best_internal_training_Session__trainers_


};
