/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Study__languagesOfStudy_ =  sequelize.define('general_education_Study__languagesOfStudy_', {
    languagesOfStudy_: {
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
    Study_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Study_',
        key: 'Study_'
      }
    },
    Language_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_education_Study__languagesOfStudy_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "languagesOfStudy_" },
        ]
      },
      {
        name: "languagesOfStudy_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "languagesOfStudy_" },
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
        name: "Study_",
        using: "BTREE",
        fields: [
          { name: "Study_" },
        ]
      },
      {
        name: "Language_",
        using: "BTREE",
        fields: [
          { name: "Language_" },
        ]
      },
    ]
  });
	general_education_Study__languagesOfStudy_.associate = models => {
		general_education_Study__languagesOfStudy_.belongsTo(models.general_education_Study_, { foreignKey: "Study_"});
		general_education_Study__languagesOfStudy_.belongsTo(models.general_Language_, { foreignKey: "Language_"});
	};
return general_education_Study__languagesOfStudy_


};
