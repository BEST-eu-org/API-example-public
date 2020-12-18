/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Team__aliases_ =  sequelize.define('general_Team__aliases_', {
    aliases_: {
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
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    alias_: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Team__aliases_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aliases_" },
        ]
      },
      {
        name: "aliases_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aliases_" },
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
        name: "Team_",
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
      {
        name: "alias_",
        using: "BTREE",
        fields: [
          { name: "alias_" },
        ]
      },
    ]
  });
	general_Team__aliases_.associate = models => {
		general_Team__aliases_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
	};
return general_Team__aliases_


};
