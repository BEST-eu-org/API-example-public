/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Archive_ =  sequelize.define('general_archive_Archive_', {
    Archive_: {
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    owner_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    access_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tmp_notesUrl_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsView_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsEdit_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsDelete_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessRightsUpload_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_archive_Archive_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Archive_" },
        ]
      },
      {
        name: "Archive_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Archive_" },
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
        name: "owner_",
        using: "BTREE",
        fields: [
          { name: "owner_" },
        ]
      },
      {
        name: "access_",
        using: "BTREE",
        fields: [
          { name: "access_" },
        ]
      },
      {
        name: "tmp_notesUrl_",
        using: "BTREE",
        fields: [
          { name: "tmp_notesUrl_" },
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
        name: "accessRightsView_",
        using: "BTREE",
        fields: [
          { name: "accessRightsView_" },
        ]
      },
      {
        name: "accessRightsEdit_",
        using: "BTREE",
        fields: [
          { name: "accessRightsEdit_" },
        ]
      },
      {
        name: "accessRightsDelete_",
        using: "BTREE",
        fields: [
          { name: "accessRightsDelete_" },
        ]
      },
      {
        name: "accessRightsUpload_",
        using: "BTREE",
        fields: [
          { name: "accessRightsUpload_" },
        ]
      },
    ]
  });
	general_archive_Archive_.associate = models => {
		general_archive_Archive_.hasMany(models.general_Project__archive_, { foreignKey: "Archive__"});
		general_archive_Archive_.belongsTo(models.general_Team_, { foreignKey: "owner_"});
		general_archive_Archive_.hasMany(models.general_archive_Archive__administrators_, { foreignKey: "Archive_"});
		general_archive_Archive_.hasMany(models.general_archive_Archive__categories_, { foreignKey: "Archive_"});
		general_archive_Archive_.hasMany(models.general_archive_Archive__tags_, { foreignKey: "Archive_"});
		general_archive_Archive_.hasMany(models.general_archive_Archive__topics_, { foreignKey: "Archive_"});
		general_archive_Archive_.hasMany(models.general_archive_Document__inArchives_, { foreignKey: "Archive_"});
		general_archive_Archive_.hasMany(models.general_archive_Folder_, { foreignKey: "archive_"});
	};
return general_archive_Archive_


};
