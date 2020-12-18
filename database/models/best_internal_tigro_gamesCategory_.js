/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_gamesCategory_ =  sequelize.define('best_internal_tigro_gamesCategory_', {
    gamesCategory_: {
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
      allowNull: true
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_gamesCategory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gamesCategory_" },
        ]
      },
      {
        name: "gamesCategory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gamesCategory_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
    ]
  });
	best_internal_tigro_gamesCategory_.associate = models => {
		best_internal_tigro_gamesCategory_.hasMany(models.best_internal_tigro_Games__category_, { foreignKey: "gamesCategory_"});
	};
return best_internal_tigro_gamesCategory_


};
