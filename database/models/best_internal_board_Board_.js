/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_board_Board_ =  sequelize.define('best_internal_board_Board_', {
    Board_: {
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
    number_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    mandateStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mandateEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    goals_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    achievements_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_board_Board_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Board_" },
        ]
      },
      {
        name: "Board_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Board_" },
        ]
      },
      {
        name: "number_lbg",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "number_" },
          { name: "lbg_" },
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
        name: "number_",
        using: "BTREE",
        fields: [
          { name: "number_" },
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
        name: "mandateStart_",
        using: "BTREE",
        fields: [
          { name: "mandateStart_" },
        ]
      },
      {
        name: "mandateEnd_",
        using: "BTREE",
        fields: [
          { name: "mandateEnd_" },
        ]
      },
      {
        name: "team_",
        using: "BTREE",
        fields: [
          { name: "team_" },
        ]
      },
    ]
  });
	best_internal_board_Board_.associate = models => {
		best_internal_board_Board_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		best_internal_board_Board_.belongsTo(models.general_Team_, { foreignKey: "team_"});
		best_internal_board_Board_.hasMany(models.best_internal_board_Position_, { foreignKey: "board_"});
	};
return best_internal_board_Board_


};
