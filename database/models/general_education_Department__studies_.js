/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Department__studies_ =  sequelize.define('general_education_Department__studies_', {
    studies_: {
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
    Study_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Study_',
        key: 'Study_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_education_Department__studies_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studies_" },
        ]
      },
      {
        name: "studies_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studies_" },
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
        name: "Study_",
        using: "BTREE",
        fields: [
          { name: "Study_" },
        ]
      },
    ]
  });
	general_education_Department__studies_.associate = models => {
		general_education_Department__studies_.belongsTo(models.general_education_Department_, { foreignKey: "Department_"});
		general_education_Department__studies_.belongsTo(models.general_education_Study_, { foreignKey: "Study_"});
	};
return general_education_Department__studies_


};
