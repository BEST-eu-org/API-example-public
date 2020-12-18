/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Block_ =  sequelize.define('best_internal_training_Block_', {
    Block_: {
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
    orderValue_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    concept_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Concept_',
        key: 'Concept_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Block_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Block_" },
        ]
      },
      {
        name: "Block_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Block_" },
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
        name: "orderValue_",
        using: "BTREE",
        fields: [
          { name: "orderValue_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "concept_",
        using: "BTREE",
        fields: [
          { name: "concept_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
    ]
  });
	best_internal_training_Block_.associate = models => {
		best_internal_training_Block_.belongsTo(models.best_internal_training_Concept_, { foreignKey: "concept_"});
	};
return best_internal_training_Block_


};
