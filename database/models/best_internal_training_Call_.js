/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Call_ =  sequelize.define('best_internal_training_Call_', {
    Call_: {
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
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      },
      unique: "best_internal_training_Call__ibfk_1"
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    trainersApplicationDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    refund_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    participantsNumber_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trainersNumber_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trainingHours_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contactEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    desc_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isDraft_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Call_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Call_" },
        ]
      },
      {
        name: "Call_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Call_" },
        ]
      },
      {
        name: "event_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event_" },
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
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "trainersApplicationDeadline_",
        using: "BTREE",
        fields: [
          { name: "trainersApplicationDeadline_" },
        ]
      },
      {
        name: "refund_",
        using: "BTREE",
        fields: [
          { name: "refund_" },
        ]
      },
      {
        name: "participantsNumber_",
        using: "BTREE",
        fields: [
          { name: "participantsNumber_" },
        ]
      },
      {
        name: "trainersNumber_",
        using: "BTREE",
        fields: [
          { name: "trainersNumber_" },
        ]
      },
      {
        name: "trainingHours_",
        using: "BTREE",
        fields: [
          { name: "trainingHours_" },
        ]
      },
      {
        name: "isDraft_",
        using: "BTREE",
        fields: [
          { name: "isDraft_" },
        ]
      },
      {
        name: "contactEmail_",
        using: "BTREE",
        fields: [
          { name: "contactEmail_" },
        ]
      },
    ]
  });
	best_internal_training_Call_.associate = models => {
		best_internal_training_Call_.belongsTo(models.general_event_Event_, { foreignKey: "event_"});
		best_internal_training_Call_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		best_internal_training_Call_.hasMany(models.best_internal_training_Call__audience_, { foreignKey: "Call_"});
		best_internal_training_Call_.hasMany(models.best_internal_training_Call__lbg_, { foreignKey: "Call_"});
		best_internal_training_Call_.hasMany(models.best_internal_training_Call__topics_, { foreignKey: "Call_"});
	};
return best_internal_training_Call_


};
