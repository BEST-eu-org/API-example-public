/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Region__formerNames_ =  sequelize.define('best_internal_Region__formerNames_', {
    formerNames_: {
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
    Region_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Region_',
        key: 'Region_'
      }
    },
    name_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    fromDate_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Region__formerNames_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "formerNames_" },
        ]
      },
      {
        name: "formerNames_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "formerNames_" },
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
        name: "Region_",
        using: "BTREE",
        fields: [
          { name: "Region_" },
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
        name: "fromDate_",
        using: "BTREE",
        fields: [
          { name: "fromDate_" },
        ]
      },
    ]
  });
	best_internal_Region__formerNames_.associate = models => {
		best_internal_Region__formerNames_.belongsTo(models.best_internal_Region_, { foreignKey: "Region_"});
	};
return best_internal_Region__formerNames_


};
