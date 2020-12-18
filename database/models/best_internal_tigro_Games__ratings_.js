/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_Games__ratings_ =  sequelize.define('best_internal_tigro_Games__ratings_', {
    ratings_: {
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
    rating_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    Games_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_tigro_Games_',
        key: 'Games_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_Games__ratings_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ratings_" },
        ]
      },
      {
        name: "ratings_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ratings_" },
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
        name: "rating_",
        using: "BTREE",
        fields: [
          { name: "rating_" },
        ]
      },
      {
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "Games_",
        using: "BTREE",
        fields: [
          { name: "Games_" },
        ]
      },
    ]
  });
	best_internal_tigro_Games__ratings_.associate = models => {
		best_internal_tigro_Games__ratings_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		best_internal_tigro_Games__ratings_.belongsTo(models.best_internal_tigro_Games_, { foreignKey: "Games_"});
	};
return best_internal_tigro_Games__ratings_


};
