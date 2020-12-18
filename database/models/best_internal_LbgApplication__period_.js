/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_LbgApplication__period_ =  sequelize.define('best_internal_LbgApplication__period_', {
    period_: {
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
    start_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LbgApplication_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_LbgApplication_',
        key: 'LbgApplication_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_LbgApplication__period_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period_" },
        ]
      },
      {
        name: "period_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period_" },
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
        name: "LbgApplication_",
        using: "BTREE",
        fields: [
          { name: "LbgApplication_" },
        ]
      },
    ]
  });
	best_internal_LbgApplication__period_.associate = models => {
		best_internal_LbgApplication__period_.belongsTo(models.best_internal_LbgApplication_, { foreignKey: "LbgApplication_"});
	};
return best_internal_LbgApplication__period_


};
