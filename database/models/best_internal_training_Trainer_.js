/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Trainer_ =  sequelize.define('best_internal_training_Trainer_', {
    Trainer_: {
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
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    interestedAdditionally_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tttType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tttEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Trainer_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Trainer_" },
        ]
      },
      {
        name: "Trainer_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Trainer_" },
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "tttType_",
        using: "BTREE",
        fields: [
          { name: "tttType_" },
        ]
      },
      {
        name: "tttEvent_",
        using: "BTREE",
        fields: [
          { name: "tttEvent_" },
        ]
      },
    ]
  });
	best_internal_training_Trainer_.associate = models => {
		best_internal_training_Trainer_.hasMany(models.best_internal_training_ExternalCourse__participants_, { foreignKey: "trainer_"});
		best_internal_training_Trainer_.hasMany(models.best_internal_training_Session__trainers_, { foreignKey: "person_"});
		best_internal_training_Trainer_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		best_internal_training_Trainer_.belongsTo(models.general_event_Event_, { foreignKey: "tttEvent_"});
		best_internal_training_Trainer_.hasMany(models.best_internal_training_Trainer__courses_, { foreignKey: "Trainer_"});
		best_internal_training_Trainer_.hasMany(models.best_internal_training_Trainer__interestedInTopics_, { foreignKey: "Trainer_"});
		best_internal_training_Trainer_.hasMany(models.best_internal_training_Trainer__skilledInTopics_, { foreignKey: "Trainer_"});
	};
return best_internal_training_Trainer_


};
