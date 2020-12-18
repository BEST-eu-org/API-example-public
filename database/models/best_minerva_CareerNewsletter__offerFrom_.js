/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter__offerFrom_ =  sequelize.define('best_minerva_CareerNewsletter__offerFrom_', {
    offerFrom_: {
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
    CareerNewsletter_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_CareerNewsletter_',
        key: 'CareerNewsletter_'
      }
    },
    Company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter__offerFrom_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "offerFrom_" },
        ]
      },
      {
        name: "offerFrom_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "offerFrom_" },
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
        name: "CareerNewsletter_",
        using: "BTREE",
        fields: [
          { name: "CareerNewsletter_" },
        ]
      },
      {
        name: "Company_",
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter__offerFrom_.associate = models => {
		best_minerva_CareerNewsletter__offerFrom_.belongsTo(models.best_minerva_CareerNewsletter_, { foreignKey: "CareerNewsletter_"});
		best_minerva_CareerNewsletter__offerFrom_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
	};
return best_minerva_CareerNewsletter__offerFrom_


};
