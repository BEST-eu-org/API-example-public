/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_wiki_WikiPage_ =  sequelize.define('best_wiki_WikiPage_', {
    WikiPage_: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    version_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modified_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modified_by_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    content_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    namespace_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_wiki_Namespace_',
        key: 'Namespace_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_wiki_WikiPage_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WikiPage_" },
        ]
      },
      {
        name: "WikiPage_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WikiPage_" },
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
        name: "version_",
        using: "BTREE",
        fields: [
          { name: "version_" },
        ]
      },
      {
        name: "modified_",
        using: "BTREE",
        fields: [
          { name: "modified_" },
        ]
      },
      {
        name: "modified_by_",
        using: "BTREE",
        fields: [
          { name: "modified_by_" },
        ]
      },
      {
        name: "namespace_",
        using: "BTREE",
        fields: [
          { name: "namespace_" },
        ]
      },
    ]
  });
	best_wiki_WikiPage_.associate = models => {
		best_wiki_WikiPage_.belongsTo(models.best_wiki_Namespace_, { foreignKey: "namespace_"});
	};
return best_wiki_WikiPage_


};
