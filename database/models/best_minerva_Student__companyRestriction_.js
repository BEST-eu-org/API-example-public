/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Student__companyRestriction_ =  sequelize.define('best_minerva_Student__companyRestriction_', {
    companyRestriction_: {
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
        model: 'best_minerva_Student_',
        key: 'Student_'
      }
    },
    Company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Student__companyRestriction_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyRestriction_" },
        ]
      },
      {
        name: "companyRestriction_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyRestriction_" },
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
        name: "Company_",
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
    ]
  });
	best_minerva_Student__companyRestriction_.associate = models => {
		best_minerva_Student__companyRestriction_.belongsTo(models.best_minerva_Student_, { foreignKey: "Student_"});
		best_minerva_Student__companyRestriction_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
	};
return best_minerva_Student__companyRestriction_


};
