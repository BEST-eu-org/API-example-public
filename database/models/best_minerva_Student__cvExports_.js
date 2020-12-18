/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Student__cvExports_ =  sequelize.define('best_minerva_Student__cvExports_', {
    cvExports_: {
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
        model: 'best_minerva_Student_',
        key: 'Student_'
      }
    },
    format_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Student__cvExports_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cvExports_" },
        ]
      },
      {
        name: "cvExports_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cvExports_" },
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
        name: "format_",
        using: "BTREE",
        fields: [
          { name: "format_" },
        ]
      },
    ]
  });
	best_minerva_Student__cvExports_.associate = models => {
		best_minerva_Student__cvExports_.belongsTo(models.best_minerva_Student_, { foreignKey: "Student_"});
	};
return best_minerva_Student__cvExports_


};
