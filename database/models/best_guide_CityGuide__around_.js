/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_guide_CityGuide__around_ =  sequelize.define('best_guide_CityGuide__around_', {
    around_: {
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
    CityGuide_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_guide_CityGuide_',
        key: 'CityGuide_'
      }
    },
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    way_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_guide_CityGuide__around_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "around_" },
        ]
      },
      {
        name: "around_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "around_" },
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
        name: "CityGuide_",
        using: "BTREE",
        fields: [
          { name: "CityGuide_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "price_",
        using: "BTREE",
        fields: [
          { name: "price_" },
        ]
      },
    ]
  });
	best_guide_CityGuide__around_.associate = models => {
		best_guide_CityGuide__around_.belongsTo(models.best_guide_CityGuide_, { foreignKey: "CityGuide_"});
	};
return best_guide_CityGuide__around_


};
