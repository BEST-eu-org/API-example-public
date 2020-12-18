/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_Games__category_ =  sequelize.define('best_internal_tigro_Games__category_', {
    category_: {
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
    Games_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tigro_Games_',
        key: 'Games_'
      }
    },
    gamesCategory_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tigro_gamesCategory_',
        key: 'gamesCategory_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_Games__category_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
      {
        name: "category_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_" },
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
        name: "Games_",
        using: "BTREE",
        fields: [
          { name: "Games_" },
        ]
      },
      {
        name: "gamesCategory_",
        using: "BTREE",
        fields: [
          { name: "gamesCategory_" },
        ]
      },
    ]
  });
	best_internal_tigro_Games__category_.associate = models => {
		best_internal_tigro_Games__category_.belongsTo(models.best_internal_tigro_Games_, { foreignKey: "Games_"});
		best_internal_tigro_Games__category_.belongsTo(models.best_internal_tigro_gamesCategory_, { foreignKey: "gamesCategory_"});
	};
return best_internal_tigro_Games__category_


};
