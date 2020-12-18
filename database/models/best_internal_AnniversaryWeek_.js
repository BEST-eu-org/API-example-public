/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_AnniversaryWeek_ =  sequelize.define('best_internal_AnniversaryWeek_', {
    AnniversaryWeek_: {
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
    number_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_AnniversaryWeek_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AnniversaryWeek_" },
        ]
      },
      {
        name: "AnniversaryWeek_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AnniversaryWeek_" },
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
        name: "number_",
        using: "BTREE",
        fields: [
          { name: "number_" },
        ]
      },
      {
        name: "startDate_",
        using: "BTREE",
        fields: [
          { name: "startDate_" },
        ]
      },
      {
        name: "endDate_",
        using: "BTREE",
        fields: [
          { name: "endDate_" },
        ]
      },
    ]
  });
	best_internal_AnniversaryWeek_.associate = models => {
		best_internal_AnniversaryWeek_.hasMany(models.best_internal_Anniversary_, { foreignKey: "week_"});
	};
return best_internal_AnniversaryWeek_


};
