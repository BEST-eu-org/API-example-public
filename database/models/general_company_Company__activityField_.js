/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Company__activityField_ =  sequelize.define('general_company_Company__activityField_', {
    activityField_: {
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
    ActivityField__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_ActivityField_',
        key: 'ActivityField_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_company_Company__activityField_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activityField_" },
        ]
      },
      {
        name: "activityField_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activityField_" },
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
        name: "ActivityField__",
        using: "BTREE",
        fields: [
          { name: "ActivityField__" },
        ]
      },
    ]
  });
	general_company_Company__activityField_.associate = models => {
		general_company_Company__activityField_.belongsTo(models.general_company_Company_, { foreignKey: "Company_"});
		general_company_Company__activityField_.belongsTo(models.general_ActivityField_, { foreignKey: "ActivityField__"});
	};
return general_company_Company__activityField_


};
