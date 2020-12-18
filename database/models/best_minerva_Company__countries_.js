/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company__countries_ =  sequelize.define('best_minerva_Company__countries_', {
    countries_: {
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
    Country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company__countries_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "countries_" },
        ]
      },
      {
        name: "countries_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "countries_" },
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
        name: "Country_",
        using: "BTREE",
        fields: [
          { name: "Country_" },
        ]
      },
    ]
  });
	best_minerva_Company__countries_.associate = models => {
		best_minerva_Company__countries_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
		best_minerva_Company__countries_.belongsTo(models.general_Country_, { foreignKey: "Country_"});
	};
return best_minerva_Company__countries_


};
