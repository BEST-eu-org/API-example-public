/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_BroadTechnologicalStudyField_ =  sequelize.define('general_BroadTechnologicalStudyField_', {
    BroadTechnologicalStudyField_: {
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
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_BroadTechnologicalStudyField_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BroadTechnologicalStudyField_" },
        ]
      },
      {
        name: "BroadTechnologicalStudyField_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BroadTechnologicalStudyField_" },
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
    ]
  });
	general_BroadTechnologicalStudyField_.associate = models => {
		general_BroadTechnologicalStudyField_.hasMany(models.general_TechnologicalStudyField_, { foreignKey: "broadTechnologicalStudyField_"});
		general_BroadTechnologicalStudyField_.hasMany(models.general_company_Company__broadActivityField_, { foreignKey: "BroadTechnologicalStudyField_"});
	};
return general_BroadTechnologicalStudyField_


};
