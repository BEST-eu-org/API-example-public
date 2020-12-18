/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_ActivityField_ =  sequelize.define('general_ActivityField_', {
    ActivityField_: {
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
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_ActivityField_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ActivityField_" },
        ]
      },
      {
        name: "ActivityField_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ActivityField_" },
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
	general_ActivityField_.associate = models => {
		general_ActivityField_.hasMany(models.best_Student__interests_, { foreignKey: "ActivityField_"});
		general_ActivityField_.hasMany(models.best_minerva_CareerNewsletter__filter__interestsFields_, { foreignKey: "ActivityField_"});
		general_ActivityField_.hasMany(models.best_minerva_Company__fields_, { foreignKey: "ActivityField_"});
		general_ActivityField_.hasMany(models.best_minerva_Student__activityFields_, { foreignKey: "ActivityField_"});
		general_ActivityField_.hasMany(models.general_company_Company__activityField_, { foreignKey: "ActivityField__"});
	};
return general_ActivityField_


};
