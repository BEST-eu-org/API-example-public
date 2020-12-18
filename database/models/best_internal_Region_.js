/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Region_ =  sequelize.define('best_internal_Region_', {
    Region_: {
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
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "name_"
    },
    usedSince_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usedUntil_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Region_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Region_" },
        ]
      },
      {
        name: "Region_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Region_" },
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
        name: "usedSince_",
        using: "BTREE",
        fields: [
          { name: "usedSince_" },
        ]
      },
      {
        name: "usedUntil_",
        using: "BTREE",
        fields: [
          { name: "usedUntil_" },
        ]
      },
    ]
  });
	best_internal_Region_.associate = models => {
		best_internal_Region_.hasMany(models.best_internal_Region__formerNames_, { foreignKey: "Region_"});
		best_internal_Region_.hasMany(models.best_internal_Region__lbgs_, { foreignKey: "Region_"});
		best_internal_Region_.hasMany(models.best_internal_Region__regionalAdvisors_, { foreignKey: "Region_"});
	};
return best_internal_Region_


};
