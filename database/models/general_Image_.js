/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Image_ =  sequelize.define('general_Image_', {
    Image_: {
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
      type: DataTypes.STRING(150),
      allowNull: true
    },
    width_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    length_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    content_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image__content_',
        key: 'content_'
      }
    },
    owner_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Image_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Image_" },
        ]
      },
      {
        name: "Image_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Image_" },
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
        name: "width_",
        using: "BTREE",
        fields: [
          { name: "width_" },
        ]
      },
      {
        name: "height_",
        using: "BTREE",
        fields: [
          { name: "height_" },
        ]
      },
      {
        name: "length_",
        using: "BTREE",
        fields: [
          { name: "length_" },
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
        name: "owner_",
        using: "BTREE",
        fields: [
          { name: "owner_" },
        ]
      },
      {
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
      {
        name: "content_",
        using: "BTREE",
        fields: [
          { name: "content_" },
        ]
      },
    ]
  });
	general_Image_.associate = models => {
		general_Image_.hasMany(models.best_internal_Anniversary__images_, { foreignKey: "Image_"});
		general_Image_.hasMany(models.best_internal_Lbg_, { foreignKey: "logo_"});
		general_Image_.hasMany(models.best_internal_marketeam_ToolboxEntry_, { foreignKey: "thumbnail_"});
		general_Image_.hasMany(models.best_internal_prop_Product_, { foreignKey: "thumbnail_"});
		general_Image_.belongsTo(models.general_Image__content_, { foreignKey: "content_"});
		general_Image_.belongsTo(models.general_Person_, { foreignKey: "owner_"});
		general_Image_.hasMany(models.general_Organisation_, { foreignKey: "logo_"});
		general_Image_.hasMany(models.general_Person_, { foreignKey: "photo_"});
		general_Image_.hasOne(models.general_Person_, { foreignKey: "photoThumbnail_"});
		general_Image_.hasOne(models.general_Person_, { foreignKey: "photoMiniThumbnail_"});
		general_Image_.hasMany(models.general_University_, { foreignKey: "logo_"});
		general_Image_.hasMany(models.general_WebNews_, { foreignKey: "picture_"});
		general_Image_.hasMany(models.general_company_Company_, { foreignKey: "logo_"});
		general_Image_.hasMany(models.general_education_Faculty_, { foreignKey: "logo_"});
	};
return general_Image_


};
