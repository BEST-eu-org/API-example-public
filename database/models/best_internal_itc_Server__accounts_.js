/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_itc_Server__accounts_ =  sequelize.define('best_internal_itc_Server__accounts_', {
    accounts_: {
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
    Server_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_itc_Server_',
        key: 'Server_'
      }
    },
    user_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_itc_User_',
        key: 'User_'
      }
    },
    hasSudo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accountDisabled_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_itc_Server__accounts_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accounts_" },
        ]
      },
      {
        name: "accounts_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accounts_" },
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
        name: "Server_",
        using: "BTREE",
        fields: [
          { name: "Server_" },
        ]
      },
      {
        name: "user_",
        using: "BTREE",
        fields: [
          { name: "user_" },
        ]
      },
      {
        name: "hasSudo_",
        using: "BTREE",
        fields: [
          { name: "hasSudo_" },
        ]
      },
      {
        name: "accountDisabled_",
        using: "BTREE",
        fields: [
          { name: "accountDisabled_" },
        ]
      },
    ]
  });
	best_internal_itc_Server__accounts_.associate = models => {
		best_internal_itc_Server__accounts_.belongsTo(models.best_internal_itc_Server_, { foreignKey: "Server_"});
		best_internal_itc_Server__accounts_.belongsTo(models.best_internal_itc_User_, { foreignKey: "user_"});
	};
return best_internal_itc_Server__accounts_


};
