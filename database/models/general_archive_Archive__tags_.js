/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Archive__tags_ =  sequelize.define('general_archive_Archive__tags_', {
    tags_: {
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
    tag_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Label_',
        key: 'Label_'
      }
    },
    onlyAdmin_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Archive_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Archive_',
        key: 'Archive_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Archive__tags_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tags_" },
        ]
      },
      {
        name: "tags_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tags_" },
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
        name: "tag_",
        using: "BTREE",
        fields: [
          { name: "tag_" },
        ]
      },
      {
        name: "onlyAdmin_",
        using: "BTREE",
        fields: [
          { name: "onlyAdmin_" },
        ]
      },
      {
        name: "Archive_",
        using: "BTREE",
        fields: [
          { name: "Archive_" },
        ]
      },
    ]
  });
	general_archive_Archive__tags_.associate = models => {
		general_archive_Archive__tags_.belongsTo(models.general_archive_Label_, { foreignKey: "tag_"});
		general_archive_Archive__tags_.belongsTo(models.general_archive_Archive_, { foreignKey: "Archive_"});
	};
return general_archive_Archive__tags_


};
