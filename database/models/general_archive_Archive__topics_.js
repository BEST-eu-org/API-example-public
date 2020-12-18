/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Archive__topics_ =  sequelize.define('general_archive_Archive__topics_', {
    topics_: {
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
    Archive_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Archive_',
        key: 'Archive_'
      }
    },
    Topic_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Topic_',
        key: 'Topic_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Archive__topics_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "topics_" },
        ]
      },
      {
        name: "topics_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "topics_" },
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
        name: "Archive_",
        using: "BTREE",
        fields: [
          { name: "Archive_" },
        ]
      },
      {
        name: "Topic_",
        using: "BTREE",
        fields: [
          { name: "Topic_" },
        ]
      },
    ]
  });
	general_archive_Archive__topics_.associate = models => {
		general_archive_Archive__topics_.belongsTo(models.general_archive_Archive_, { foreignKey: "Archive_"});
		general_archive_Archive__topics_.belongsTo(models.general_Topic_, { foreignKey: "Topic_"});
	};
return general_archive_Archive__topics_


};
