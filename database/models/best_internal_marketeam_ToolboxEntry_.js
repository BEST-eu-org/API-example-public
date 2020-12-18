/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_marketeam_ToolboxEntry_ =  sequelize.define('best_internal_marketeam_ToolboxEntry_', {
    ToolboxEntry_: {
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
    title_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    helpText_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnail_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    content_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastUpdated_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_marketeam_ToolboxEntry_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ToolboxEntry_" },
        ]
      },
      {
        name: "ToolboxEntry_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ToolboxEntry_" },
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
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
        ]
      },
      {
        name: "helpText_",
        using: "BTREE",
        fields: [
          { name: "helpText_" },
        ]
      },
      {
        name: "thumbnail_",
        using: "BTREE",
        fields: [
          { name: "thumbnail_" },
        ]
      },
      {
        name: "lastUpdated_",
        using: "BTREE",
        fields: [
          { name: "lastUpdated_" },
        ]
      },
    ]
  });
	best_internal_marketeam_ToolboxEntry_.associate = models => {
		best_internal_marketeam_ToolboxEntry_.belongsTo(models.general_Image_, { foreignKey: "thumbnail_"});
		best_internal_marketeam_ToolboxEntry_.hasMany(models.best_internal_marketeam_ToolboxEntry__inCategories_, { foreignKey: "ToolboxEntry_"});
		best_internal_marketeam_ToolboxEntry_.hasMany(models.best_internal_marketeam_ToolboxEntry__item_, { foreignKey: "ToolboxEntry_"});
	};
return best_internal_marketeam_ToolboxEntry_


};
