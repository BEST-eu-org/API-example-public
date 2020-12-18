/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_marketeam_ToolboxCategory__subCategory_ =  sequelize.define('best_internal_marketeam_ToolboxCategory__subCategory_', {
    subCategory_: {
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
    ToolboxCategory_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_marketeam_ToolboxCategory_',
        key: 'ToolboxCategory_'
      }
    },
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_marketeam_ToolboxCategory__subCategory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subCategory_" },
        ]
      },
      {
        name: "subCategory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subCategory_" },
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
        name: "ToolboxCategory_",
        using: "BTREE",
        fields: [
          { name: "ToolboxCategory_" },
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
    ]
  });
	best_internal_marketeam_ToolboxCategory__subCategory_.associate = models => {
		best_internal_marketeam_ToolboxCategory__subCategory_.belongsTo(models.best_internal_marketeam_ToolboxCategory_, { foreignKey: "ToolboxCategory_"});
		best_internal_marketeam_ToolboxCategory__subCategory_.hasMany(models.best_internal_marketeam_ToolboxEntry__inCategories_, { foreignKey: "ToolboxCategory_"});
	};
return best_internal_marketeam_ToolboxCategory__subCategory_


};
