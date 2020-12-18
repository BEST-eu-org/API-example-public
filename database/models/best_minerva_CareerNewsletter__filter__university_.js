/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter__filter__university_ =  sequelize.define('best_minerva_CareerNewsletter__filter__university_', {
    university_: {
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
    University__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter__filter__university_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
      {
        name: "university_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "university_" },
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
        name: "University__",
        using: "BTREE",
        fields: [
          { name: "University__" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter__filter__university_.associate = models => {
		best_minerva_CareerNewsletter__filter__university_.belongsTo(models.best_minerva_CareerNewsletter__filter_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter__filter__university_.belongsTo(models.general_University_, { foreignKey: "University__"});
	};
return best_minerva_CareerNewsletter__filter__university_


};
