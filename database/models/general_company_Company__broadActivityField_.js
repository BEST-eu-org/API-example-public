/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Company__broadActivityField_ =  sequelize.define('general_company_Company__broadActivityField_', {
    broadActivityField_: {
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
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    BroadTechnologicalStudyField_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_BroadTechnologicalStudyField_',
        key: 'BroadTechnologicalStudyField_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_company_Company__broadActivityField_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "broadActivityField_" },
        ]
      },
      {
        name: "broadActivityField_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "broadActivityField_" },
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
        name: "BroadTechnologicalStudyField_",
        using: "BTREE",
        fields: [
          { name: "BroadTechnologicalStudyField_" },
        ]
      },
    ]
  });
	general_company_Company__broadActivityField_.associate = models => {
		general_company_Company__broadActivityField_.belongsTo(models.general_company_Company_, { foreignKey: "Company_"});
		general_company_Company__broadActivityField_.belongsTo(models.general_BroadTechnologicalStudyField_, { foreignKey: "BroadTechnologicalStudyField_"});
	};
return general_company_Company__broadActivityField_


};
