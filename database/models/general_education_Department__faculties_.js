/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Department__faculties_ =  sequelize.define('general_education_Department__faculties_', {
    faculties_: {
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
    Department_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Department_',
        key: 'Department_'
      }
    },
    Faculty_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Faculty_',
        key: 'Faculty_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_education_Department__faculties_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faculties_" },
        ]
      },
      {
        name: "faculties_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faculties_" },
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
        name: "Department_",
        using: "BTREE",
        fields: [
          { name: "Department_" },
        ]
      },
      {
        name: "Faculty_",
        using: "BTREE",
        fields: [
          { name: "Faculty_" },
        ]
      },
    ]
  });
	general_education_Department__faculties_.associate = models => {
		general_education_Department__faculties_.belongsTo(models.general_education_Department_, { foreignKey: "Department_"});
		general_education_Department__faculties_.belongsTo(models.general_education_Faculty_, { foreignKey: "Faculty_"});
	};
return general_education_Department__faculties_


};
