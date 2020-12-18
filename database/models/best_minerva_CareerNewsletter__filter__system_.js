/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter__filter__system_ =  sequelize.define('best_minerva_CareerNewsletter__filter__system_', {
    system_: {
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
    filter_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_CareerNewsletter__filter_',
        key: 'filter_'
      }
    },
    enum_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter__filter__system_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "system_" },
        ]
      },
      {
        name: "system_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "system_" },
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
        name: "filter_",
        using: "BTREE",
        fields: [
          { name: "filter_" },
        ]
      },
      {
        name: "enum_",
        using: "BTREE",
        fields: [
          { name: "enum_" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter__filter__system_.associate = models => {
		best_minerva_CareerNewsletter__filter__system_.belongsTo(models.best_minerva_CareerNewsletter__filter_, { foreignKey: "filter_"});
	};
return best_minerva_CareerNewsletter__filter__system_


};
