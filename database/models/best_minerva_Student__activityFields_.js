/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Student__activityFields_ =  sequelize.define('best_minerva_Student__activityFields_', {
    activityFields_: {
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
    ActivityField_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_ActivityField_',
        key: 'ActivityField_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Student__activityFields_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activityFields_" },
        ]
      },
      {
        name: "activityFields_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activityFields_" },
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
        name: "ActivityField_",
        using: "BTREE",
        fields: [
          { name: "ActivityField_" },
        ]
      },
    ]
  });
	best_minerva_Student__activityFields_.associate = models => {
		best_minerva_Student__activityFields_.belongsTo(models.best_minerva_Student_, { foreignKey: "Student_"});
		best_minerva_Student__activityFields_.belongsTo(models.general_ActivityField_, { foreignKey: "ActivityField_"});
	};
return best_minerva_Student__activityFields_


};
