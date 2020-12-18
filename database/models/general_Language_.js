/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Language_ =  sequelize.define('general_Language_', {
    Language_: {
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
      type: DataTypes.STRING(40),
      allowNull: true
    },
    iso2LetterCode_: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    iso3LetterCode_: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Language_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Language_" },
        ]
      },
      {
        name: "Language_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Language_" },
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
        name: "iso2LetterCode_",
        using: "BTREE",
        fields: [
          { name: "iso2LetterCode_" },
        ]
      },
      {
        name: "iso3LetterCode_",
        using: "BTREE",
        fields: [
          { name: "iso3LetterCode_" },
        ]
      },
    ]
  });
	general_Language_.associate = models => {
		general_Language_.hasMany(models.best_Student__lang_, { foreignKey: "language_"});
		general_Language_.hasMany(models.best_bcc_UniversityOffer__allowedLanguages_, { foreignKey: "Language_"});
		general_Language_.hasMany(models.best_internal_training_ExternalCourse_, { foreignKey: "language_"});
		general_Language_.hasMany(models.best_internal_training_Session_, { foreignKey: "language_"});
		general_Language_.hasMany(models.best_internal_training_Trainer__courses_, { foreignKey: "language_"});
		general_Language_.hasMany(models.best_minerva_CareerNewsletter__filter__language_, { foreignKey: "Language__"});
		general_Language_.hasMany(models.general_Contact__lang_, { foreignKey: "Language_"});
		general_Language_.hasMany(models.general_Country__languages_, { foreignKey: "language_"});
		general_Language_.hasMany(models.general_UniversityOffer__allowedLanguages_, { foreignKey: "Language_"});
		general_Language_.hasMany(models.general_address_City__nativeNames_, { foreignKey: "language_"});
		general_Language_.hasMany(models.general_education_Study__languagesOfStudy_, { foreignKey: "Language_"});
	};
return general_Language_


};
