/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Student__skills_ =  sequelize.define('best_internal_Student__skills_', {
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
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    skill_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Skill_',
        key: 'Skill_'
      }
    },
    level_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Student__skills_',
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
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "skill_",
        using: "BTREE",
        fields: [
          { name: "skill_" },
        ]
      },
      {
        name: "level_",
        using: "BTREE",
        fields: [
          { name: "level_" },
        ]
      },
    ]
  });
	best_internal_Student__skills_.associate = models => {
		best_internal_Student__skills_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
		best_internal_Student__skills_.belongsTo(models.best_internal_hrtool_Skill_, { foreignKey: "skill_"});
	};
return best_internal_Student__skills_


};
