/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_WebNews_ =  sequelize.define('general_WebNews_', {
    WebNews_: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    author_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    publication_date_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expiry_date_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    short_text_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    long_text_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    related_link_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    author_comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    picture_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    approved_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    who_approved_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    removed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_WebNews_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WebNews_" },
        ]
      },
      {
        name: "WebNews_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WebNews_" },
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
        name: "author_",
        using: "BTREE",
        fields: [
          { name: "author_" },
        ]
      },
      {
        name: "publication_date_",
        using: "BTREE",
        fields: [
          { name: "publication_date_" },
        ]
      },
      {
        name: "expiry_date_",
        using: "BTREE",
        fields: [
          { name: "expiry_date_" },
        ]
      },
      {
        name: "related_link_",
        using: "BTREE",
        fields: [
          { name: "related_link_" },
        ]
      },
      {
        name: "picture_",
        using: "BTREE",
        fields: [
          { name: "picture_" },
        ]
      },
      {
        name: "approved_",
        using: "BTREE",
        fields: [
          { name: "approved_" },
        ]
      },
      {
        name: "who_approved_",
        using: "BTREE",
        fields: [
          { name: "who_approved_" },
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
        name: "sticky_",
        using: "BTREE",
        fields: [
          { name: "sticky_" },
        ]
      },
      {
        name: "removed_",
        using: "BTREE",
        fields: [
          { name: "removed_" },
        ]
      },
    ]
  });
	general_WebNews_.associate = models => {
		general_WebNews_.belongsTo(models.general_Person_, { foreignKey: "author_"});
		general_WebNews_.belongsTo(models.general_Image_, { foreignKey: "picture_"});
		general_WebNews_.belongsTo(models.best_internal_Student_, { foreignKey: "who_approved_"});
		general_WebNews_.hasMany(models.general_WebNews__comments_, { foreignKey: "WebNews_"});
		general_WebNews_.hasMany(models.general_WebNews__inappropriate_, { foreignKey: "WebNews_"});
		general_WebNews_.hasMany(models.general_WebNews__labels_, { foreignKey: "WebNews_"});
		general_WebNews_.hasMany(models.general_WebNews__locations_, { foreignKey: "WebNews_"});
	};
return general_WebNews_


};
