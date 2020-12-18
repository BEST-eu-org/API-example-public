/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_eec_competition_Category_ =  sequelize.define('best_internal_eec_competition_Category_', {
    Category_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    handBookLink_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_eec_competition_Category_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Category_" },
        ]
      },
      {
        name: "Category_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Category_" },
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
      {
        name: "handBookLink_",
        using: "BTREE",
        fields: [
          { name: "handBookLink_" },
        ]
      },
    ]
  });
	best_internal_eec_competition_Category_.associate = models => {
		best_internal_eec_competition_Category_.hasMany(models.best_internal_eec_competition_Task_, { foreignKey: "category_"});
	};
return best_internal_eec_competition_Category_


};
