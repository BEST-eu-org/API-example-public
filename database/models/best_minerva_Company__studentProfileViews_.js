/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company__studentProfileViews_ =  sequelize.define('best_minerva_Company__studentProfileViews_', {
    studentProfileViews_: {
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
    representative_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_CompanyRepresentative_',
        key: 'CompanyRepresentative_'
      }
    },
    student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company__studentProfileViews_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studentProfileViews_" },
        ]
      },
      {
        name: "studentProfileViews_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studentProfileViews_" },
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
        name: "representative_",
        using: "BTREE",
        fields: [
          { name: "representative_" },
        ]
      },
      {
        name: "student_",
        using: "BTREE",
        fields: [
          { name: "student_" },
        ]
      },
    ]
  });
	best_minerva_Company__studentProfileViews_.associate = models => {
		best_minerva_Company__studentProfileViews_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
		best_minerva_Company__studentProfileViews_.belongsTo(models.general_company_CompanyRepresentative_, { foreignKey: "representative_"});
		best_minerva_Company__studentProfileViews_.belongsTo(models.best_minerva_Student_, { foreignKey: "student_"});
	};
return best_minerva_Company__studentProfileViews_


};
