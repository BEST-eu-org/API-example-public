/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_TechnologicalStudyField_ =  sequelize.define('general_TechnologicalStudyField_', {
    TechnologicalStudyField_: {
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
    broadTechnologicalStudyField_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_BroadTechnologicalStudyField_',
        key: 'BroadTechnologicalStudyField_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_TechnologicalStudyField_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TechnologicalStudyField_" },
        ]
      },
      {
        name: "TechnologicalStudyField_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TechnologicalStudyField_" },
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
        name: "broadTechnologicalStudyField_",
        using: "BTREE",
        fields: [
          { name: "broadTechnologicalStudyField_" },
        ]
      },
    ]
  });
	general_TechnologicalStudyField_.associate = models => {
		general_TechnologicalStudyField_.hasMany(models.best_Student__education__studyfields_, { foreignKey: "TechnologicalStudyField_"});
		general_TechnologicalStudyField_.hasMany(models.best_bcc_UniversityOffer__studyField_, { foreignKey: "TechnologicalStudyField_"});
		general_TechnologicalStudyField_.hasMany(models.best_johnny_Activity__fieldsOfActivity_, { foreignKey: "TechnologicalStudyField_"});
		general_TechnologicalStudyField_.hasMany(models.best_minerva_CareerNewsletter__filter__studyFields_, { foreignKey: "TechnologicalStudyField_"});
		general_TechnologicalStudyField_.belongsTo(models.general_BroadTechnologicalStudyField_, { foreignKey: "broadTechnologicalStudyField_"});
		general_TechnologicalStudyField_.hasMany(models.general_UniversityOffer__studyField_, { foreignKey: "TechnologicalStudyField_"});
		general_TechnologicalStudyField_.hasMany(models.general_education_Study__studyField_, { foreignKey: "TechnologicalStudyField_"});
	};
return general_TechnologicalStudyField_


};
