/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_marketeam_ToolboxEntry__inCategories_ =  sequelize.define('best_internal_marketeam_ToolboxEntry__inCategories_', {
    inCategories_: {
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
    ToolboxEntry_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_marketeam_ToolboxEntry_',
        key: 'ToolboxEntry_'
      }
    },
    ToolboxCategory_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_marketeam_ToolboxCategory__subCategory_',
        key: 'subCategory_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_marketeam_ToolboxEntry__inCategories_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inCategories_" },
        ]
      },
      {
        name: "inCategories_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inCategories_" },
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
        name: "ToolboxEntry_",
        using: "BTREE",
        fields: [
          { name: "ToolboxEntry_" },
        ]
      },
      {
        name: "ToolboxCategory_",
        using: "BTREE",
        fields: [
          { name: "ToolboxCategory_" },
        ]
      },
    ]
  });
	best_internal_marketeam_ToolboxEntry__inCategories_.associate = models => {
		best_internal_marketeam_ToolboxEntry__inCategories_.belongsTo(models.best_internal_marketeam_ToolboxEntry_, { foreignKey: "ToolboxEntry_"});
		best_internal_marketeam_ToolboxEntry__inCategories_.belongsTo(models.best_internal_marketeam_ToolboxCategory__subCategory_, { foreignKey: "ToolboxCategory_"});
	};
return best_internal_marketeam_ToolboxEntry__inCategories_


};
