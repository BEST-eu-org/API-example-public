/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company__cvExports_ =  sequelize.define('best_minerva_Company__cvExports_', {
    cvExports_: {
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
    Company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    },
    student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Student_',
        key: 'Student_'
      }
    },
    representative_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_CompanyRepresentative_',
        key: 'CompanyRepresentative_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company__cvExports_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cvExports_" },
        ]
      },
      {
        name: "cvExports_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cvExports_" },
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
        name: "Company_",
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
      {
        name: "student_",
        using: "BTREE",
        fields: [
          { name: "student_" },
        ]
      },
      {
        name: "representative_",
        using: "BTREE",
        fields: [
          { name: "representative_" },
        ]
      },
    ]
  });
	best_minerva_Company__cvExports_.associate = models => {
		best_minerva_Company__cvExports_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
		best_minerva_Company__cvExports_.belongsTo(models.best_minerva_Student_, { foreignKey: "student_"});
		best_minerva_Company__cvExports_.belongsTo(models.general_company_CompanyRepresentative_, { foreignKey: "representative_"});
	};
return best_minerva_Company__cvExports_


};
