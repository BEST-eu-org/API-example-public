/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_board_PositionType_ =  sequelize.define('best_internal_board_PositionType_', {
    PositionType_: {
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
      type: DataTypes.STRING(150),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sortingRank_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "sortingRank_"
    }
  }, {
    sequelize,
    tableName: 'best_internal_board_PositionType_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PositionType_" },
        ]
      },
      {
        name: "PositionType_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PositionType_" },
        ]
      },
      {
        name: "sortingRank_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sortingRank_" },
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
    ]
  });
	best_internal_board_PositionType_.associate = models => {
		best_internal_board_PositionType_.hasMany(models.best_internal_board_Position__generalPosition_, { foreignKey: "PositionType_"});
	};
return best_internal_board_PositionType_


};
