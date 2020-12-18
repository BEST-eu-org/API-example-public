/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Team__administratorGroups_ =  sequelize.define('general_Team__administratorGroups_', {
    administratorGroups_: {
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
    Team__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Team__administratorGroups_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "administratorGroups_" },
        ]
      },
      {
        name: "administratorGroups_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "administratorGroups_" },
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
        name: "Team__",
        using: "BTREE",
        fields: [
          { name: "Team__" },
        ]
      },
    ]
  });
	general_Team__administratorGroups_.associate = models => {
		general_Team__administratorGroups_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
		general_Team__administratorGroups_.belongsTo(models.general_Team_, { foreignKey: "Team__"});
	};
return general_Team__administratorGroups_


};
