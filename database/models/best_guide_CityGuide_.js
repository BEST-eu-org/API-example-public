/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_guide_CityGuide_ =  sequelize.define('best_guide_CityGuide_', {
    CityGuide_: {
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
    city_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_address_City_',
        key: 'City_'
      }
    },
    luggageStorage_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    luggageStoragePrice_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    touristOffice_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    internetPlace_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    taxiAffordable_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    taxiPrice_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    publicTransports_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    specialTransports_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipsTransports_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    panoramaWhere_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    panoramaWhen_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meetingPoint_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    centralPlace_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    allNightShops_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    market_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bigMall_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timeLunch_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timeDinner_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timeGoOut_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avoid_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visible_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_guide_CityGuide_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CityGuide_" },
        ]
      },
      {
        name: "CityGuide_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CityGuide_" },
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
        name: "city_",
        using: "BTREE",
        fields: [
          { name: "city_" },
        ]
      },
      {
        name: "luggageStoragePrice_",
        using: "BTREE",
        fields: [
          { name: "luggageStoragePrice_" },
        ]
      },
      {
        name: "taxiAffordable_",
        using: "BTREE",
        fields: [
          { name: "taxiAffordable_" },
        ]
      },
      {
        name: "taxiPrice_",
        using: "BTREE",
        fields: [
          { name: "taxiPrice_" },
        ]
      },
      {
        name: "panoramaWhen_",
        using: "BTREE",
        fields: [
          { name: "panoramaWhen_" },
        ]
      },
      {
        name: "timeLunch_",
        using: "BTREE",
        fields: [
          { name: "timeLunch_" },
        ]
      },
      {
        name: "timeDinner_",
        using: "BTREE",
        fields: [
          { name: "timeDinner_" },
        ]
      },
      {
        name: "timeGoOut_",
        using: "BTREE",
        fields: [
          { name: "timeGoOut_" },
        ]
      },
      {
        name: "visible_",
        using: "BTREE",
        fields: [
          { name: "visible_" },
        ]
      },
      {
        name: "touristOffice_",
        using: "BTREE",
        fields: [
          { name: "touristOffice_" },
        ]
      },
      {
        name: "internetPlace_",
        using: "BTREE",
        fields: [
          { name: "internetPlace_" },
        ]
      },
      {
        name: "bigMall_",
        using: "BTREE",
        fields: [
          { name: "bigMall_" },
        ]
      },
    ]
  });
	best_guide_CityGuide_.associate = models => {
		best_guide_CityGuide_.belongsTo(models.general_address_City_, { foreignKey: "city_"});
		best_guide_CityGuide_.hasMany(models.best_guide_CityGuide__around_, { foreignKey: "CityGuide_"});
		best_guide_CityGuide_.hasMany(models.best_guide_CityGuide__comments_, { foreignKey: "CityGuide_"});
		best_guide_CityGuide_.hasMany(models.best_guide_CityGuide__eating_, { foreignKey: "CityGuide_"});
		best_guide_CityGuide_.hasMany(models.best_guide_CityGuide__leave_, { foreignKey: "CityGuide_"});
		best_guide_CityGuide_.hasMany(models.best_guide_CityGuide__livingPlace_, { foreignKey: "CityGuide_"});
		best_guide_CityGuide_.hasMany(models.best_guide_CityGuide__party_, { foreignKey: "CityGuide_"});
	};
return best_guide_CityGuide_


};
