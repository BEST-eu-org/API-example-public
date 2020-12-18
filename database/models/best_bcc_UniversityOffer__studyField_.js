/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_bcc_UniversityOffer__studyField_ =  sequelize.define('best_bcc_UniversityOffer__studyField_', {
    studyField_: {
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
    UniversityOffer_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_bcc_UniversityOffer_',
        key: 'UniversityOffer_'
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
    tableName: 'best_bcc_UniversityOffer__studyField_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studyField_" },
        ]
      },
      {
        name: "studyField_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studyField_" },
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
        name: "UniversityOffer_",
        using: "BTREE",
        fields: [
          { name: "UniversityOffer_" },
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
	best_bcc_UniversityOffer__studyField_.associate = models => {
		best_bcc_UniversityOffer__studyField_.belongsTo(models.best_bcc_UniversityOffer_, { foreignKey: "UniversityOffer_"});
		best_bcc_UniversityOffer__studyField_.belongsTo(models.general_TechnologicalStudyField_, { foreignKey: "TechnologicalStudyField_"});
	};
return best_bcc_UniversityOffer__studyField_


};
