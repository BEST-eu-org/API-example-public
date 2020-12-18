/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter__filter_ =  sequelize.define('best_minerva_CareerNewsletter__filter_', {
    filter_: {
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
    bestMembership_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    graduatedBefore_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    graduatedAfter_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter__filter_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "filter_" },
        ]
      },
      {
        name: "filter_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "filter_" },
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
        name: "bestMembership_",
        using: "BTREE",
        fields: [
          { name: "bestMembership_" },
        ]
      },
      {
        name: "graduatedBefore_",
        using: "BTREE",
        fields: [
          { name: "graduatedBefore_" },
        ]
      },
      {
        name: "graduatedAfter_",
        using: "BTREE",
        fields: [
          { name: "graduatedAfter_" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter__filter_.associate = models => {
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter__filter__country_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter__filter__interestsFields_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter__filter__language_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter__filter__studyFields_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter__filter__system_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter_.hasMany(models.best_minerva_CareerNewsletter__filter__university_, { foreignKey: "filter_"});
	};
return best_minerva_CareerNewsletter__filter_


};
