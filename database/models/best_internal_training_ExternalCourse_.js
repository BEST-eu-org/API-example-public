/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_ExternalCourse_ =  sequelize.define('best_internal_training_ExternalCourse_', {
    ExternalCourse_: {
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
    generalEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    },
    hours_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    organiser_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    language_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_ExternalCourse_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ExternalCourse_" },
        ]
      },
      {
        name: "ExternalCourse_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ExternalCourse_" },
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
        name: "generalEvent_",
        using: "BTREE",
        fields: [
          { name: "generalEvent_" },
        ]
      },
      {
        name: "hours_",
        using: "BTREE",
        fields: [
          { name: "hours_" },
        ]
      },
      {
        name: "organiser_",
        using: "BTREE",
        fields: [
          { name: "organiser_" },
        ]
      },
      {
        name: "language_",
        using: "BTREE",
        fields: [
          { name: "language_" },
        ]
      },
    ]
  });
	best_internal_training_ExternalCourse_.associate = models => {
		best_internal_training_ExternalCourse_.belongsTo(models.general_event_Event_, { foreignKey: "generalEvent_"});
		best_internal_training_ExternalCourse_.belongsTo(models.general_Language_, { foreignKey: "language_"});
		best_internal_training_ExternalCourse_.hasMany(models.best_internal_training_ExternalCourse__participants_, { foreignKey: "ExternalCourse_"});
		best_internal_training_ExternalCourse_.hasMany(models.best_internal_training_ExternalCourse__topics_, { foreignKey: "ExternalCourse_"});
	};
return best_internal_training_ExternalCourse_


};
