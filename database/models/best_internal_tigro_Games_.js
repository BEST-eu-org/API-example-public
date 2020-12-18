/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_Games_ =  sequelize.define('best_internal_tigro_Games_', {
    Games_: {
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
    minPlayers_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxPlayers_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    materials_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submitter_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    valid_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_Games_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Games_" },
        ]
      },
      {
        name: "Games_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Games_" },
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
        name: "minPlayers_",
        using: "BTREE",
        fields: [
          { name: "minPlayers_" },
        ]
      },
      {
        name: "maxPlayers_",
        using: "BTREE",
        fields: [
          { name: "maxPlayers_" },
        ]
      },
      {
        name: "duration_",
        using: "BTREE",
        fields: [
          { name: "duration_" },
        ]
      },
      {
        name: "submitter_",
        using: "BTREE",
        fields: [
          { name: "submitter_" },
        ]
      },
      {
        name: "valid_",
        using: "BTREE",
        fields: [
          { name: "valid_" },
        ]
      },
    ]
  });
	best_internal_tigro_Games_.associate = models => {
		best_internal_tigro_Games_.hasMany(models.best_internal_Student__gameList_, { foreignKey: "game_"});
		best_internal_tigro_Games_.belongsTo(models.best_internal_Student_, { foreignKey: "submitter_"});
		best_internal_tigro_Games_.hasMany(models.best_internal_tigro_Games__category_, { foreignKey: "Games_"});
		best_internal_tigro_Games_.hasMany(models.best_internal_tigro_Games__comments_, { foreignKey: "Games_"});
		best_internal_tigro_Games_.hasMany(models.best_internal_tigro_Games__ratings_, { foreignKey: "Games_"});
	};
return best_internal_tigro_Games_


};
