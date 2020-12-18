/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Project__teams_ =  sequelize.define('general_Project__teams_', {
    teams_: {
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
    Project_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Project_',
        key: 'Project_'
      }
    },
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Project__teams_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teams_" },
        ]
      },
      {
        name: "teams_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teams_" },
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
        name: "Project_",
        using: "BTREE",
        fields: [
          { name: "Project_" },
        ]
      },
      {
        name: "Team_",
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
    ]
  });
	general_Project__teams_.associate = models => {
		general_Project__teams_.belongsTo(models.general_Project_, { foreignKey: "Project_"});
		general_Project__teams_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
	};
return general_Project__teams_


};
