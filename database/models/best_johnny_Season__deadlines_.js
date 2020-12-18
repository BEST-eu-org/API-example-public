/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Season__deadlines_ =  sequelize.define('best_johnny_Season__deadlines_', {
    deadlines_: {
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
    Season_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Season_',
        key: 'Season_'
      }
    },
    what_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    when_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Season__deadlines_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deadlines_" },
        ]
      },
      {
        name: "deadlines_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deadlines_" },
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
        name: "Season_",
        using: "BTREE",
        fields: [
          { name: "Season_" },
        ]
      },
      {
        name: "what_",
        using: "BTREE",
        fields: [
          { name: "what_" },
        ]
      },
      {
        name: "when_",
        using: "BTREE",
        fields: [
          { name: "when_" },
        ]
      },
    ]
  });
	best_johnny_Season__deadlines_.associate = models => {
		best_johnny_Season__deadlines_.belongsTo(models.best_johnny_Season_, { foreignKey: "Season_"});
	};
return best_johnny_Season__deadlines_


};
