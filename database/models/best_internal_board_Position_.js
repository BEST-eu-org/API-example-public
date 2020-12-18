/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_board_Position_ =  sequelize.define('best_internal_board_Position_', {
    Position_: {
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
      type: DataTypes.STRING(250),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inBoard_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    board_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_board_Board_',
        key: 'Board_'
      }
    },
    mandateStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mandateEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_board_Position_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Position_" },
        ]
      },
      {
        name: "Position_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Position_" },
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
        name: "inBoard_",
        using: "BTREE",
        fields: [
          { name: "inBoard_" },
        ]
      },
      {
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "board_",
        using: "BTREE",
        fields: [
          { name: "board_" },
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
    ]
  });
	best_internal_board_Position_.associate = models => {
		best_internal_board_Position_.belongsTo(models.best_internal_Student_, { foreignKey: "person_"});
		best_internal_board_Position_.belongsTo(models.best_internal_board_Board_, { foreignKey: "board_"});
		best_internal_board_Position_.hasMany(models.best_internal_board_Position__generalPosition_, { foreignKey: "Position_"});
	};
return best_internal_board_Position_


};
