/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_itc_User_ =  sequelize.define('best_internal_itc_User_', {
    User_: {
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
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      },
      unique: "best_internal_itc_User__ibfk_1"
    },
    username_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uid_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "uid_"
    },
    passwordMD5_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA1_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_itc_User_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "User_" },
        ]
      },
      {
        name: "User_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "User_" },
        ]
      },
      {
        name: "person_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "uid_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid_" },
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
        name: "username_",
        using: "BTREE",
        fields: [
          { name: "username_" },
        ]
      },
      {
        name: "passwordMD5_",
        using: "BTREE",
        fields: [
          { name: "passwordMD5_" },
        ]
      },
      {
        name: "passwordSHA1_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA1_" },
        ]
      },
    ]
  });
	best_internal_itc_User_.associate = models => {
		best_internal_itc_User_.hasMany(models.best_internal_itc_Server__accounts_, { foreignKey: "user_"});
		best_internal_itc_User_.belongsTo(models.general_Person_, { foreignKey: "person_"});
	};
return best_internal_itc_User_


};
