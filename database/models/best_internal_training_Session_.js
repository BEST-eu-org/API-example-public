/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Session_ =  sequelize.define('best_internal_training_Session_', {
    Session_: {
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
      }
    },
    title_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hours_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    noParticipants_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audience_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    language_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    createdOn_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastUpdatedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    lastUpdatedOn_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Session_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Session_" },
        ]
      },
      {
        name: "Session_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Session_" },
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
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
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
        name: "hours_",
        using: "BTREE",
        fields: [
          { name: "hours_" },
        ]
      },
      {
        name: "trDate_",
        using: "BTREE",
        fields: [
          { name: "trDate_" },
        ]
      },
      {
        name: "noParticipants_",
        using: "BTREE",
        fields: [
          { name: "noParticipants_" },
        ]
      },
      {
        name: "audience_",
        using: "BTREE",
        fields: [
          { name: "audience_" },
        ]
      },
      {
        name: "language_",
        using: "BTREE",
        fields: [
          { name: "language_" },
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
        name: "createdBy_",
        using: "BTREE",
        fields: [
          { name: "createdBy_" },
        ]
      },
      {
        name: "createdOn_",
        using: "BTREE",
        fields: [
          { name: "createdOn_" },
        ]
      },
      {
        name: "lastUpdatedBy_",
        using: "BTREE",
        fields: [
          { name: "lastUpdatedBy_" },
        ]
      },
      {
        name: "lastUpdatedOn_",
        using: "BTREE",
        fields: [
          { name: "lastUpdatedOn_" },
        ]
      },
    ]
  });
	best_internal_training_Session_.associate = models => {
		best_internal_training_Session_.belongsTo(models.general_event_Event_, { foreignKey: "event_"});
		best_internal_training_Session_.belongsTo(models.general_Language_, { foreignKey: "language_"});
		best_internal_training_Session_.belongsTo(models.general_Person_, { foreignKey: "createdBy_"});
		best_internal_training_Session_.belongsTo(models.general_Person_, { foreignKey: "lastUpdatedBy_"});
		best_internal_training_Session_.hasMany(models.best_internal_training_Session__organisation_, { foreignKey: "Session_"});
		best_internal_training_Session_.hasMany(models.best_internal_training_Session__participants_, { foreignKey: "Session_"});
		best_internal_training_Session_.hasMany(models.best_internal_training_Session__topics_, { foreignKey: "Session_"});
		best_internal_training_Session_.hasMany(models.best_internal_training_Session__trainers_, { foreignKey: "Session_"});
	};
return best_internal_training_Session_


};
