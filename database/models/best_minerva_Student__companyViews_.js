/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Student__companyViews_ =  sequelize.define('best_minerva_Student__companyViews_', {
    companyViews_: {
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
    representative_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_CompanyRepresentative_',
        key: 'CompanyRepresentative_'
      }
    },
    company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Student__companyViews_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyViews_" },
        ]
      },
      {
        name: "companyViews_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyViews_" },
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
        name: "representative_",
        using: "BTREE",
        fields: [
          { name: "representative_" },
        ]
      },
      {
        name: "company_",
        using: "BTREE",
        fields: [
          { name: "company_" },
        ]
      },
    ]
  });
	best_minerva_Student__companyViews_.associate = models => {
		best_minerva_Student__companyViews_.belongsTo(models.best_minerva_Student_, { foreignKey: "Student_"});
		best_minerva_Student__companyViews_.belongsTo(models.general_company_CompanyRepresentative_, { foreignKey: "representative_"});
		best_minerva_Student__companyViews_.belongsTo(models.best_minerva_Company_, { foreignKey: "company_"});
	};
return best_minerva_Student__companyViews_


};
