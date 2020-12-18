/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Team__administrators_ =  sequelize.define('general_Team__administrators_', {
    administrators_: {
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
    Person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Team__administrators_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "administrators_" },
        ]
      },
      {
        name: "administrators_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "administrators_" },
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
        name: "Person_",
        using: "BTREE",
        fields: [
          { name: "Person_" },
        ]
      },
    ]
  });
	general_Team__administrators_.associate = models => {
		general_Team__administrators_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
		general_Team__administrators_.belongsTo(models.general_Person_, { foreignKey: "Person_"});
	};
return general_Team__administrators_


};
