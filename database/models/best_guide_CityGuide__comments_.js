/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_guide_CityGuide__comments_ =  sequelize.define('best_guide_CityGuide__comments_', {
    comments_: {
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
    who_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    when_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_guide_CityGuide__comments_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comments_" },
        ]
      },
      {
        name: "comments_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comments_" },
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
        name: "who_",
        using: "BTREE",
        fields: [
          { name: "who_" },
        ]
      },
      {
        name: "when_",
        using: "BTREE",
        fields: [
          { name: "when_" },
        ]
      },
      {
        name: "rating_",
        using: "BTREE",
        fields: [
          { name: "rating_" },
        ]
      },
    ]
  });
	best_guide_CityGuide__comments_.associate = models => {
		best_guide_CityGuide__comments_.belongsTo(models.best_guide_CityGuide_, { foreignKey: "CityGuide_"});
		best_guide_CityGuide__comments_.belongsTo(models.general_Person_, { foreignKey: "who_"});
	};
return best_guide_CityGuide__comments_


};
