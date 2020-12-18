/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_hrtool_Team__skills_ =  sequelize.define('best_internal_hrtool_Team__skills_', {
    skills_: {
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
        model: 'best_internal_hrtool_Team_',
        key: 'Team_'
      }
    },
    Skill_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Skill_',
        key: 'Skill_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_hrtool_Team__skills_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "skills_" },
        ]
      },
      {
        name: "skills_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "skills_" },
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
        name: "Skill_",
        using: "BTREE",
        fields: [
          { name: "Skill_" },
        ]
      },
    ]
  });
	best_internal_hrtool_Team__skills_.associate = models => {
		best_internal_hrtool_Team__skills_.belongsTo(models.best_internal_hrtool_Team_, { foreignKey: "Team_"});
		best_internal_hrtool_Team__skills_.belongsTo(models.best_internal_hrtool_Skill_, { foreignKey: "Skill_"});
	};
return best_internal_hrtool_Team__skills_


};
