/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Session__topics_ =  sequelize.define('best_internal_training_Session__topics_', {
    topics_: {
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
    Topic_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Topic_',
        key: 'Topic_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Session__topics_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "topics_" },
        ]
      },
      {
        name: "topics_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "topics_" },
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
        name: "Topic_",
        using: "BTREE",
        fields: [
          { name: "Topic_" },
        ]
      },
    ]
  });
	best_internal_training_Session__topics_.associate = models => {
		best_internal_training_Session__topics_.belongsTo(models.best_internal_training_Session_, { foreignKey: "Session_"});
		best_internal_training_Session__topics_.belongsTo(models.best_internal_training_Topic_, { foreignKey: "Topic_"});
	};
return best_internal_training_Session__topics_


};
