/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Faculty_ =  sequelize.define('general_education_Faculty_', {
    Faculty_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    url_: {
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
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Faculty__address_',
        key: 'address_'
      }
    },
    undergraduateStudents_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    postgraduateStudents_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phd_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    technology_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    foreignStudents_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_education_Faculty_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Faculty_" },
        ]
      },
      {
        name: "Faculty_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Faculty_" },
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
        name: "logo_",
        using: "BTREE",
        fields: [
          { name: "logo_" },
        ]
      },
      {
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
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
        name: "address_",
        using: "BTREE",
        fields: [
          { name: "address_" },
        ]
      },
      {
        name: "undergraduateStudents_",
        using: "BTREE",
        fields: [
          { name: "undergraduateStudents_" },
        ]
      },
      {
        name: "postgraduateStudents_",
        using: "BTREE",
        fields: [
          { name: "postgraduateStudents_" },
        ]
      },
      {
        name: "phd_",
        using: "BTREE",
        fields: [
          { name: "phd_" },
        ]
      },
      {
        name: "technology_",
        using: "BTREE",
        fields: [
          { name: "technology_" },
        ]
      },
      {
        name: "foreignStudents_",
        using: "BTREE",
        fields: [
          { name: "foreignStudents_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
    ]
  });
	general_education_Faculty_.associate = models => {
		general_education_Faculty_.hasMany(models.best_bcc_UniversityOffer_, { foreignKey: "faculty_"});
		general_education_Faculty_.hasMany(models.general_UniversityOffer_, { foreignKey: "faculty_"});
		general_education_Faculty_.hasMany(models.general_education_Department__faculties_, { foreignKey: "Faculty_"});
		general_education_Faculty_.belongsTo(models.general_Image_, { foreignKey: "logo_"});
		general_education_Faculty_.belongsTo(models.general_University_, { foreignKey: "university_"});
		general_education_Faculty_.belongsTo(models.general_education_Faculty__address_, { foreignKey: "address_"});
		general_education_Faculty_.hasMany(models.general_education_Faculty__studies_, { foreignKey: "Faculty_"});
	};
return general_education_Faculty_


};
