/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Student__gameList_ =  sequelize.define('best_internal_Student__gameList_', {
    gameList_: {
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
    game_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tigro_Games_',
        key: 'Games_'
      }
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_Student__gameList_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gameList_" },
        ]
      },
      {
        name: "gameList_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gameList_" },
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
        name: "game_",
        using: "BTREE",
        fields: [
          { name: "game_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	best_internal_Student__gameList_.associate = models => {
		best_internal_Student__gameList_.belongsTo(models.best_internal_tigro_Games_, { foreignKey: "game_"});
		best_internal_Student__gameList_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return best_internal_Student__gameList_


};
