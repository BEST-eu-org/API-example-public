/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Student_ =  sequelize.define('best_minerva_Student_', {
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    student__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    receiveAll_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    availability_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    itskills_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publications_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastlogin_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    account_active_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    softskills_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hardskills_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Student_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "Student_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Student_" },
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
        name: "student__",
        using: "BTREE",
        fields: [
          { name: "student__" },
        ]
      },
      {
        name: "receiveAll_",
        using: "BTREE",
        fields: [
          { name: "receiveAll_" },
        ]
      },
      {
        name: "lastlogin_",
        using: "BTREE",
        fields: [
          { name: "lastlogin_" },
        ]
      },
      {
        name: "account_active_",
        using: "BTREE",
        fields: [
          { name: "account_active_" },
        ]
      },
    ]
  });
	best_minerva_Student_.associate = models => {
		best_minerva_Student_.hasMany(models.best_minerva_Company__cvExports_, { foreignKey: "student_"});
		best_minerva_Student_.hasMany(models.best_minerva_Company__studentProfileViews_, { foreignKey: "student_"});
		best_minerva_Student_.belongsTo(models.best_Student_, { foreignKey: "student__"});
		best_minerva_Student_.hasMany(models.best_minerva_Student__activityFields_, { foreignKey: "Student_"});
		best_minerva_Student_.hasMany(models.best_minerva_Student__activityKinds_, { foreignKey: "Student_"});
		best_minerva_Student_.hasMany(models.best_minerva_Student__companyRestriction_, { foreignKey: "Student_"});
		best_minerva_Student_.hasMany(models.best_minerva_Student__companyViews_, { foreignKey: "Student_"});
		best_minerva_Student_.hasMany(models.best_minerva_Student__cvExports_, { foreignKey: "Student_"});
	};
return best_minerva_Student_


};
