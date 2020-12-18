/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_training_Call__audience_ =  sequelize.define('best_internal_training_Call__audience_', {
    audience_: {
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
    Call_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_training_Call_',
        key: 'Call_'
      }
    },
    enum_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_training_Call__audience_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audience_" },
        ]
      },
      {
        name: "audience_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audience_" },
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
        name: "Call_",
        using: "BTREE",
        fields: [
          { name: "Call_" },
        ]
      },
      {
        name: "enum_",
        using: "BTREE",
        fields: [
          { name: "enum_" },
        ]
      },
    ]
  });
	best_internal_training_Call__audience_.associate = models => {
		best_internal_training_Call__audience_.belongsTo(models.best_internal_training_Call_, { foreignKey: "Call_"});
	};
return best_internal_training_Call__audience_


};
