/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Student__education__studyfields_ =  sequelize.define('best_Student__education__studyfields_', {
    studyfields_: {
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
    education_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student__education_',
        key: 'education_'
      }
    },
    TechnologicalStudyField_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_TechnologicalStudyField_',
        key: 'TechnologicalStudyField_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_Student__education__studyfields_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studyfields_" },
        ]
      },
      {
        name: "studyfields_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studyfields_" },
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
        name: "education_",
        using: "BTREE",
        fields: [
          { name: "education_" },
        ]
      },
      {
        name: "TechnologicalStudyField_",
        using: "BTREE",
        fields: [
          { name: "TechnologicalStudyField_" },
        ]
      },
    ]
  });
	best_Student__education__studyfields_.associate = models => {
		best_Student__education__studyfields_.belongsTo(models.best_Student__education_, { foreignKey: "education_"});
		best_Student__education__studyfields_.belongsTo(models.general_TechnologicalStudyField_, { foreignKey: "TechnologicalStudyField_"});
	};
return best_Student__education__studyfields_


};
