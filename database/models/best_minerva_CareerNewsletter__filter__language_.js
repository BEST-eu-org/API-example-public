/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter__filter__language_ =  sequelize.define('best_minerva_CareerNewsletter__filter__language_', {
    language_: {
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
    Language__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter__filter__language_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "language_" },
        ]
      },
      {
        name: "language_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "language_" },
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
        name: "Language__",
        using: "BTREE",
        fields: [
          { name: "Language__" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter__filter__language_.associate = models => {
		best_minerva_CareerNewsletter__filter__language_.belongsTo(models.best_minerva_CareerNewsletter__filter_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter__language_.belongsTo(models.general_Language_, { foreignKey: "Language__"});
	};
return best_minerva_CareerNewsletter__filter__language_


};
