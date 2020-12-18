/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Archive__categories_ =  sequelize.define('general_archive_Archive__categories_', {
    categories_: {
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
    Category_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Category_',
        key: 'Category_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Archive__categories_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categories_" },
        ]
      },
      {
        name: "categories_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categories_" },
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
        name: "Category_",
        using: "BTREE",
        fields: [
          { name: "Category_" },
        ]
      },
    ]
  });
	general_archive_Archive__categories_.associate = models => {
		general_archive_Archive__categories_.belongsTo(models.general_archive_Archive_, { foreignKey: "Archive_"});
		general_archive_Archive__categories_.belongsTo(models.general_archive_Category_, { foreignKey: "Category_"});
	};
return general_archive_Archive__categories_


};
