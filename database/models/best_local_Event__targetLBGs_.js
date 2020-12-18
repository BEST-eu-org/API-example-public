/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_local_Event__targetLBGs_ =  sequelize.define('best_local_Event__targetLBGs_', {
    targetLBGs_: {
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
    Event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_local_Event_',
        key: 'Event_'
      }
    },
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_local_Event__targetLBGs_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "targetLBGs_" },
        ]
      },
      {
        name: "targetLBGs_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "targetLBGs_" },
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
        name: "Event_",
        using: "BTREE",
        fields: [
          { name: "Event_" },
        ]
      },
      {
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
        ]
      },
    ]
  });
	best_local_Event__targetLBGs_.associate = models => {
		best_local_Event__targetLBGs_.belongsTo(models.best_local_Event_, { foreignKey: "Event_"});
		best_local_Event__targetLBGs_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
	};
return best_local_Event__targetLBGs_


};
