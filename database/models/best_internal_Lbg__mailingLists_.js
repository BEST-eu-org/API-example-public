/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Lbg__mailingLists_ =  sequelize.define('best_internal_Lbg__mailingLists_', {
    mailingLists_: {
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
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
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
    tableName: 'best_internal_Lbg__mailingLists_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mailingLists_" },
        ]
      },
      {
        name: "mailingLists_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mailingLists_" },
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
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
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
	best_internal_Lbg__mailingLists_.associate = models => {
		best_internal_Lbg__mailingLists_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
		best_internal_Lbg__mailingLists_.belongsTo(models.general_Team_, { foreignKey: "Team_"});
	};
return best_internal_Lbg__mailingLists_


};
