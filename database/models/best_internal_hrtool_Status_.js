/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_hrtool_Status_ =  sequelize.define('best_internal_hrtool_Status_', {
    Status_: {
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
      type: DataTypes.STRING(80),
      allowNull: true
    },
    isDeleted_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isShown_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    canBeMentor_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    orderValue_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasHrToolAccess_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasLBGcompanyDBaccess_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasWikiAccess_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasArchivesAccess_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasTaskManagerAccess_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_hrtool_Status_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Status_" },
        ]
      },
      {
        name: "Status_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Status_" },
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
        name: "isDeleted_",
        using: "BTREE",
        fields: [
          { name: "isDeleted_" },
        ]
      },
      {
        name: "isShown_",
        using: "BTREE",
        fields: [
          { name: "isShown_" },
        ]
      },
      {
        name: "canBeMentor_",
        using: "BTREE",
        fields: [
          { name: "canBeMentor_" },
        ]
      },
      {
        name: "orderValue_",
        using: "BTREE",
        fields: [
          { name: "orderValue_" },
        ]
      },
      {
        name: "hasHrToolAccess_",
        using: "BTREE",
        fields: [
          { name: "hasHrToolAccess_" },
        ]
      },
      {
        name: "hasLBGcompanyDBaccess_",
        using: "BTREE",
        fields: [
          { name: "hasLBGcompanyDBaccess_" },
        ]
      },
      {
        name: "hasWikiAccess_",
        using: "BTREE",
        fields: [
          { name: "hasWikiAccess_" },
        ]
      },
      {
        name: "hasArchivesAccess_",
        using: "BTREE",
        fields: [
          { name: "hasArchivesAccess_" },
        ]
      },
      {
        name: "hasTaskManagerAccess_",
        using: "BTREE",
        fields: [
          { name: "hasTaskManagerAccess_" },
        ]
      },
    ]
  });
	best_internal_hrtool_Status_.associate = models => {
		best_internal_hrtool_Status_.hasMany(models.best_internal_Student__statusHistory_, { foreignKey: "status_"});
		best_internal_hrtool_Status_.hasMany(models.best_internal_hrtool_Team__members_, { foreignKey: "status_"});
		best_internal_hrtool_Status_.hasMany(models.best_internal_hrtool_Team__status_, { foreignKey: "Status__"});
	};
return best_internal_hrtool_Status_


};
