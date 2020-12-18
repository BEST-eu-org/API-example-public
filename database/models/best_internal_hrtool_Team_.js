/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_hrtool_Team_ =  sequelize.define('best_internal_hrtool_Team_', {
    Team_: {
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
    name_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    hrTeam_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_hrtool_Team_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
      {
        name: "Team_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Team_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "hrTeam_",
        using: "BTREE",
        fields: [
          { name: "hrTeam_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
    ]
  });
	best_internal_hrtool_Team_.associate = models => {
		best_internal_hrtool_Team_.hasMany(models.best_internal_Student__statusHistory_, { foreignKey: "statusTeam_"});
		best_internal_hrtool_Team_.belongsTo(models.general_Team_, { foreignKey: "hrTeam_"});
		best_internal_hrtool_Team_.hasMany(models.best_internal_hrtool_Team__hrPersons_, { foreignKey: "Team_"});
		best_internal_hrtool_Team_.hasMany(models.best_internal_hrtool_Team__mailingLists_, { foreignKey: "Team_"});
		best_internal_hrtool_Team_.hasMany(models.best_internal_hrtool_Team__members_, { foreignKey: "Team_"});
		best_internal_hrtool_Team_.hasMany(models.best_internal_hrtool_Team__projectMailingLists_, { foreignKey: "Team_"});
		best_internal_hrtool_Team_.hasMany(models.best_internal_hrtool_Team__skills_, { foreignKey: "Team_"});
		best_internal_hrtool_Team_.hasMany(models.best_internal_hrtool_Team__status_, { foreignKey: "Team_"});
	};
return best_internal_hrtool_Team_


};
