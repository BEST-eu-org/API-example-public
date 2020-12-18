/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company__searchLBGs_ =  sequelize.define('best_minerva_Company__searchLBGs_', {
    searchLBGs_: {
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
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company__searchLBGs_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "searchLBGs_" },
        ]
      },
      {
        name: "searchLBGs_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "searchLBGs_" },
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
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
        ]
      },
    ]
  });
	best_minerva_Company__searchLBGs_.associate = models => {
		best_minerva_Company__searchLBGs_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
		best_minerva_Company__searchLBGs_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
	};
return best_minerva_Company__searchLBGs_


};
