/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Session__organisation_ =  sequelize.define('best_internal_training_Session__organisation_', {
    organisation_: {
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
    Organisation__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Organisation_',
        key: 'Organisation_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Session__organisation_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "organisation_" },
        ]
      },
      {
        name: "organisation_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "organisation_" },
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
        name: "Organisation__",
        using: "BTREE",
        fields: [
          { name: "Organisation__" },
        ]
      },
    ]
  });
	best_internal_training_Session__organisation_.associate = models => {
		best_internal_training_Session__organisation_.belongsTo(models.best_internal_training_Session_, { foreignKey: "Session_"});
		best_internal_training_Session__organisation_.belongsTo(models.general_Organisation_, { foreignKey: "Organisation__"});
	};
return best_internal_training_Session__organisation_


};
