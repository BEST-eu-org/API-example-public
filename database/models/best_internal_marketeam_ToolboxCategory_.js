/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_marketeam_ToolboxCategory_ =  sequelize.define('best_internal_marketeam_ToolboxCategory_', {
    ToolboxCategory_: {
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
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortDescription_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    longDescription_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    viewType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_marketeam_ToolboxCategory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ToolboxCategory_" },
        ]
      },
      {
        name: "ToolboxCategory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ToolboxCategory_" },
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
        name: "position_",
        using: "BTREE",
        fields: [
          { name: "position_" },
        ]
      },
      {
        name: "shortDescription_",
        using: "BTREE",
        fields: [
          { name: "shortDescription_" },
        ]
      },
      {
        name: "viewType_",
        using: "BTREE",
        fields: [
          { name: "viewType_" },
        ]
      },
    ]
  });
	best_internal_marketeam_ToolboxCategory_.associate = models => {
		best_internal_marketeam_ToolboxCategory_.hasMany(models.best_internal_marketeam_ToolboxCategory__subCategory_, { foreignKey: "ToolboxCategory_"});
	};
return best_internal_marketeam_ToolboxCategory_


};
