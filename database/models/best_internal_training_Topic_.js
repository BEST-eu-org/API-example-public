/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Topic_ =  sequelize.define('best_internal_training_Topic_', {
    Topic_: {
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
    topic__: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "topic__"
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usedIn_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Topic_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Topic_" },
        ]
      },
      {
        name: "Topic_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Topic_" },
        ]
      },
      {
        name: "topic__",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "topic__" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "usedIn_",
        using: "BTREE",
        fields: [
          { name: "usedIn_" },
        ]
      },
    ]
  });
	best_internal_training_Topic_.associate = models => {
		best_internal_training_Topic_.hasMany(models.best_internal_training_Call__topics_, { foreignKey: "Topic_"});
		best_internal_training_Topic_.hasMany(models.best_internal_training_Concept_, { foreignKey: "topic_"});
		best_internal_training_Topic_.hasMany(models.best_internal_training_ExternalCourse__topics_, { foreignKey: "Topic_"});
		best_internal_training_Topic_.hasMany(models.best_internal_training_Session__topics_, { foreignKey: "Topic_"});
		best_internal_training_Topic_.hasMany(models.best_internal_training_Trainer__courses__topics_, { foreignKey: "Topic_"});
		best_internal_training_Topic_.hasMany(models.best_internal_training_Trainer__interestedInTopics_, { foreignKey: "Topic_"});
		best_internal_training_Topic_.hasMany(models.best_internal_training_Trainer__skilledInTopics_, { foreignKey: "Topic_"});
	};
return best_internal_training_Topic_


};
