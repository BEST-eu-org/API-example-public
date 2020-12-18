/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_itc_Server_ =  sequelize.define('best_internal_itc_Server_', {
    Server_: {
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
    nicknames_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    locationDescription_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    published_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    story_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inUse_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startUse_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endUse_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    generalUse_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_itc_Server_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Server_" },
        ]
      },
      {
        name: "Server_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Server_" },
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
        name: "nicknames_",
        using: "BTREE",
        fields: [
          { name: "nicknames_" },
        ]
      },
      {
        name: "location_",
        using: "BTREE",
        fields: [
          { name: "location_" },
        ]
      },
      {
        name: "locationDescription_",
        using: "BTREE",
        fields: [
          { name: "locationDescription_" },
        ]
      },
      {
        name: "ip_",
        using: "BTREE",
        fields: [
          { name: "ip_" },
        ]
      },
      {
        name: "published_",
        using: "BTREE",
        fields: [
          { name: "published_" },
        ]
      },
      {
        name: "inUse_",
        using: "BTREE",
        fields: [
          { name: "inUse_" },
        ]
      },
      {
        name: "startUse_",
        using: "BTREE",
        fields: [
          { name: "startUse_" },
        ]
      },
      {
        name: "endUse_",
        using: "BTREE",
        fields: [
          { name: "endUse_" },
        ]
      },
      {
        name: "generalUse_",
        using: "BTREE",
        fields: [
          { name: "generalUse_" },
        ]
      },
    ]
  });
	best_internal_itc_Server_.associate = models => {
		best_internal_itc_Server_.belongsTo(models.best_internal_Lbg_, { foreignKey: "location_"});
		best_internal_itc_Server_.hasMany(models.best_internal_itc_Server__accounts_, { foreignKey: "Server_"});
	};
return best_internal_itc_Server_


};
