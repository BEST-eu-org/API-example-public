/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_ExternalCourse__participants_ =  sequelize.define('best_internal_training_ExternalCourse__participants_', {
    participants_: {
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
    trainer_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Trainer_',
        key: 'Trainer_'
      }
    },
    ExternalCourse_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_ExternalCourse_',
        key: 'ExternalCourse_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_ExternalCourse__participants_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "participants_" },
        ]
      },
      {
        name: "participants_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "participants_" },
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
        name: "trainer_",
        using: "BTREE",
        fields: [
          { name: "trainer_" },
        ]
      },
      {
        name: "ExternalCourse_",
        using: "BTREE",
        fields: [
          { name: "ExternalCourse_" },
        ]
      },
    ]
  });
	best_internal_training_ExternalCourse__participants_.associate = models => {
		best_internal_training_ExternalCourse__participants_.belongsTo(models.best_internal_training_Trainer_, { foreignKey: "trainer_"});
		best_internal_training_ExternalCourse__participants_.belongsTo(models.best_internal_training_ExternalCourse_, { foreignKey: "ExternalCourse_"});
	};
return best_internal_training_ExternalCourse__participants_


};
