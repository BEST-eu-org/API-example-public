/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company__fields_ =  sequelize.define('best_minerva_Company__fields_', {
    fields_: {
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
    ActivityField_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_ActivityField_',
        key: 'ActivityField_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company__fields_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fields_" },
        ]
      },
      {
        name: "fields_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fields_" },
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
        name: "ActivityField_",
        using: "BTREE",
        fields: [
          { name: "ActivityField_" },
        ]
      },
    ]
  });
	best_minerva_Company__fields_.associate = models => {
		best_minerva_Company__fields_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
		best_minerva_Company__fields_.belongsTo(models.general_ActivityField_, { foreignKey: "ActivityField_"});
	};
return best_minerva_Company__fields_


};
