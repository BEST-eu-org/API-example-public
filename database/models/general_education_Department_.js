/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Department_ =  sequelize.define('general_education_Department_', {
    Department_: {
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
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_education_Department_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Department_" },
        ]
      },
      {
        name: "Department_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Department_" },
        ]
      },
      {
        name: "university_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "university_" },
          { name: "name_" },
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
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
    ]
  });
	general_education_Department_.associate = models => {
		general_education_Department_.hasMany(models.best_bcc_UniversityOffer_, { foreignKey: "department_"});
		general_education_Department_.hasMany(models.general_UniversityOffer_, { foreignKey: "department_"});
		general_education_Department_.belongsTo(models.general_University_, { foreignKey: "university_"});
		general_education_Department_.hasMany(models.general_education_Department__faculties_, { foreignKey: "Department_"});
		general_education_Department_.hasMany(models.general_education_Department__studies_, { foreignKey: "Department_"});
	};
return general_education_Department_


};
