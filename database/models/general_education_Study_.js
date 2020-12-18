/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Study_ =  sequelize.define('general_education_Study_', {
    Study_: {
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
    studyField_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nameDegree_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nameDegreeOriginal_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_education_Study_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Study_" },
        ]
      },
      {
        name: "Study_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Study_" },
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
        name: "nameDegree_",
        using: "BTREE",
        fields: [
          { name: "nameDegree_" },
        ]
      },
      {
        name: "nameDegreeOriginal_",
        using: "BTREE",
        fields: [
          { name: "nameDegreeOriginal_" },
        ]
      },
      {
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
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
	general_education_Study_.associate = models => {
		general_education_Study_.hasMany(models.general_education_Department__studies_, { foreignKey: "Study_"});
		general_education_Study_.hasMany(models.general_education_Faculty__studies_, { foreignKey: "Study_"});
		general_education_Study_.belongsTo(models.general_University_, { foreignKey: "university_"});
		general_education_Study_.hasMany(models.general_education_Study__languagesOfStudy_, { foreignKey: "Study_"});
		general_education_Study_.hasMany(models.general_education_Study__studyField_, { foreignKey: "Study_"});
	};
return general_education_Study_


};
