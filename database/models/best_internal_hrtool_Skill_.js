/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_hrtool_Skill_ =  sequelize.define('best_internal_hrtool_Skill_', {
    Skill_: {
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
    }
  }, {
    sequelize,
    tableName: 'best_internal_hrtool_Skill_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Skill_" },
        ]
      },
      {
        name: "Skill_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Skill_" },
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
    ]
  });
	best_internal_hrtool_Skill_.associate = models => {
		best_internal_hrtool_Skill_.hasMany(models.best_internal_Student__skills_, { foreignKey: "skill_"});
		best_internal_hrtool_Skill_.hasMany(models.best_internal_hrtool_Team__skills_, { foreignKey: "Skill_"});
	};
return best_internal_hrtool_Skill_


};
