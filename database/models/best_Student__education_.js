/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Student__education_ =  sequelize.define('best_Student__education_', {
    education_: {
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
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    typeofstud_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finishdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faculty_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    graduated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minimumlength_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    entitle_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    thesis_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    oldTypeofstudCharEnum_: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_Student__education_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "education_" },
        ]
      },
      {
        name: "education_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "education_" },
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
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
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
        name: "typeofstud_",
        using: "BTREE",
        fields: [
          { name: "typeofstud_" },
        ]
      },
      {
        name: "startdate_",
        using: "BTREE",
        fields: [
          { name: "startdate_" },
        ]
      },
      {
        name: "finishdate_",
        using: "BTREE",
        fields: [
          { name: "finishdate_" },
        ]
      },
      {
        name: "faculty_",
        using: "BTREE",
        fields: [
          { name: "faculty_" },
        ]
      },
      {
        name: "graduated_",
        using: "BTREE",
        fields: [
          { name: "graduated_" },
        ]
      },
      {
        name: "minimumlength_",
        using: "BTREE",
        fields: [
          { name: "minimumlength_" },
        ]
      },
      {
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
        ]
      },
      {
        name: "entitle_",
        using: "BTREE",
        fields: [
          { name: "entitle_" },
        ]
      },
      {
        name: "oldTypeofstudCharEnum_",
        using: "BTREE",
        fields: [
          { name: "oldTypeofstudCharEnum_" },
        ]
      },
    ]
  });
	best_Student__education_.associate = models => {
		best_Student__education_.belongsTo(models.best_Student_, { foreignKey: "Student_"});
		best_Student__education_.belongsTo(models.general_University_, { foreignKey: "university_"});
		best_Student__education_.hasMany(models.best_Student__education__studyfields_, { foreignKey: "education_"});
	};
return best_Student__education_


};
