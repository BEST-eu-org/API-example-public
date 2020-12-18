/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Trainer__courses_ =  sequelize.define('best_internal_training_Trainer__courses_', {
    courses_: {
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
    Trainer_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Trainer_',
        key: 'Trainer_'
      }
    },
    title_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'best_internal_training_Trainer__courses_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courses_" },
        ]
      },
      {
        name: "courses_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courses_" },
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
        name: "Trainer_",
        using: "BTREE",
        fields: [
          { name: "Trainer_" },
        ]
      },
      {
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
        ]
      },
      {
        name: "start_",
        using: "BTREE",
        fields: [
          { name: "start_" },
        ]
      },
      {
        name: "end_",
        using: "BTREE",
        fields: [
          { name: "end_" },
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
	best_internal_training_Trainer__courses_.associate = models => {
		best_internal_training_Trainer__courses_.belongsTo(models.best_internal_training_Trainer_, { foreignKey: "Trainer_"});
		best_internal_training_Trainer__courses_.belongsTo(models.general_Language_, { foreignKey: "language_"});
		best_internal_training_Trainer__courses_.hasMany(models.best_internal_training_Trainer__courses__topics_, { foreignKey: "courses_"});
	};
return best_internal_training_Trainer__courses_


};
