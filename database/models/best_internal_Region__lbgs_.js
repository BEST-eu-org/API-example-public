/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Region__lbgs_ =  sequelize.define('best_internal_Region__lbgs_', {
    lbgs_: {
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
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    fromDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toDate_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Region__lbgs_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lbgs_" },
        ]
      },
      {
        name: "lbgs_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lbgs_" },
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
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "fromDate_",
        using: "BTREE",
        fields: [
          { name: "fromDate_" },
        ]
      },
      {
        name: "toDate_",
        using: "BTREE",
        fields: [
          { name: "toDate_" },
        ]
      },
    ]
  });
	best_internal_Region__lbgs_.associate = models => {
		best_internal_Region__lbgs_.belongsTo(models.best_internal_Region_, { foreignKey: "Region_"});
		best_internal_Region__lbgs_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
	};
return best_internal_Region__lbgs_


};
