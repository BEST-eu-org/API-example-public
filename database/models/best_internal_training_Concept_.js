/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Concept_ =  sequelize.define('best_internal_training_Concept_', {
    Concept_: {
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
    name_: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "name_"
    },
    topic_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Topic_',
        key: 'Topic_'
      }
    },
    targetGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Concept_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Concept_" },
        ]
      },
      {
        name: "Concept_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Concept_" },
        ]
      },
      {
        name: "name_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name_" },
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
        name: "topic_",
        using: "BTREE",
        fields: [
          { name: "topic_" },
        ]
      },
      {
        name: "targetGroup_",
        using: "BTREE",
        fields: [
          { name: "targetGroup_" },
        ]
      },
    ]
  });
	best_internal_training_Concept_.associate = models => {
		best_internal_training_Concept_.hasMany(models.best_internal_training_Block_, { foreignKey: "concept_"});
		best_internal_training_Concept_.belongsTo(models.best_internal_training_Topic_, { foreignKey: "topic_"});
		best_internal_training_Concept_.hasMany(models.best_internal_training_Concept__changeLog_, { foreignKey: "Concept_"});
	};
return best_internal_training_Concept_


};
