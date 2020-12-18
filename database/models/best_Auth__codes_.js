/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Auth__codes_ =  sequelize.define('best_Auth__codes_', {
    codes_: {
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
    Auth_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Auth_',
        key: 'Auth_'
      }
    },
    season_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Season_',
        key: 'Season_'
      }
    },
    code_: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_Auth__codes_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codes_" },
        ]
      },
      {
        name: "codes_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codes_" },
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
        name: "Auth_",
        using: "BTREE",
        fields: [
          { name: "Auth_" },
        ]
      },
      {
        name: "season_",
        using: "BTREE",
        fields: [
          { name: "season_" },
        ]
      },
      {
        name: "code_",
        using: "BTREE",
        fields: [
          { name: "code_" },
        ]
      },
      {
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
    ]
  });
	best_Auth__codes_.associate = models => {
		best_Auth__codes_.belongsTo(models.best_Auth_, { foreignKey: "Auth_"});
		best_Auth__codes_.belongsTo(models.best_johnny_Season_, { foreignKey: "season_"});
		best_Auth__codes_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
	};
return best_Auth__codes_


};
