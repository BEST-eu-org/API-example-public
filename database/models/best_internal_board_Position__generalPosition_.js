/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_board_Position__generalPosition_ =  sequelize.define('best_internal_board_Position__generalPosition_', {
    generalPosition_: {
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
    Position_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_board_Position_',
        key: 'Position_'
      }
    },
    PositionType_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_board_PositionType_',
        key: 'PositionType_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_board_Position__generalPosition_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "generalPosition_" },
        ]
      },
      {
        name: "generalPosition_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "generalPosition_" },
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
        name: "Position_",
        using: "BTREE",
        fields: [
          { name: "Position_" },
        ]
      },
      {
        name: "PositionType_",
        using: "BTREE",
        fields: [
          { name: "PositionType_" },
        ]
      },
    ]
  });
	best_internal_board_Position__generalPosition_.associate = models => {
		best_internal_board_Position__generalPosition_.belongsTo(models.best_internal_board_Position_, { foreignKey: "Position_"});
		best_internal_board_Position__generalPosition_.belongsTo(models.best_internal_board_PositionType_, { foreignKey: "PositionType_"});
	};
return best_internal_board_Position__generalPosition_


};
