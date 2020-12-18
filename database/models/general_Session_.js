/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Session_ =  sequelize.define('general_Session_', {
    Session_: {
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
    jsessionid_: {
      type: DataTypes.STRING(43),
      allowNull: true,
      unique: "jsessionid_"
    },
    bestAuth_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Auth_',
        key: 'Auth_'
      }
    },
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    rememberMe_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sessonAttributes_: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Session_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Session_" },
        ]
      },
      {
        name: "Session_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Session_" },
        ]
      },
      {
        name: "jsessionid_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "jsessionid_" },
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
        name: "bestAuth_",
        using: "BTREE",
        fields: [
          { name: "bestAuth_" },
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
        name: "rememberMe_",
        using: "BTREE",
        fields: [
          { name: "rememberMe_" },
        ]
      },
    ]
  });
	general_Session_.associate = models => {
		general_Session_.belongsTo(models.best_Auth_, { foreignKey: "bestAuth_"});
		general_Session_.belongsTo(models.general_Person_, { foreignKey: "person_"});
	};
return general_Session_


};
