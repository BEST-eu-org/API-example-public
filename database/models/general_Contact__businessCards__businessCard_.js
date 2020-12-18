/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Contact__businessCards__businessCard_ =  sequelize.define('general_Contact__businessCards__businessCard_', {
    businessCard_: {
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
    content_: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    contentLength_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contentType_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    originalName_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imageWidth_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imageHeight_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Contact__businessCards__businessCard_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessCard_" },
        ]
      },
      {
        name: "businessCard_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessCard_" },
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
        name: "contentLength_",
        using: "BTREE",
        fields: [
          { name: "contentLength_" },
        ]
      },
      {
        name: "contentType_",
        using: "BTREE",
        fields: [
          { name: "contentType_" },
        ]
      },
      {
        name: "originalName_",
        using: "BTREE",
        fields: [
          { name: "originalName_" },
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
        name: "imageWidth_",
        using: "BTREE",
        fields: [
          { name: "imageWidth_" },
        ]
      },
      {
        name: "imageHeight_",
        using: "BTREE",
        fields: [
          { name: "imageHeight_" },
        ]
      },
    ]
  });
	general_Contact__businessCards__businessCard_.associate = models => {
		general_Contact__businessCards__businessCard_.hasMany(models.general_Contact__businessCards_, { foreignKey: "businessCard_"});
	};
return general_Contact__businessCards__businessCard_


};
