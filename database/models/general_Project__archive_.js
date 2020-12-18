/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Project__archive_ =  sequelize.define('general_Project__archive_', {
    archive_: {
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
    Project_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Project_',
        key: 'Project_'
      }
    },
    Archive__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Archive_',
        key: 'Archive_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Project__archive_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "archive_" },
        ]
      },
      {
        name: "archive_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "archive_" },
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
        name: "Project_",
        using: "BTREE",
        fields: [
          { name: "Project_" },
        ]
      },
      {
        name: "Archive__",
        using: "BTREE",
        fields: [
          { name: "Archive__" },
        ]
      },
    ]
  });
	general_Project__archive_.associate = models => {
		general_Project__archive_.belongsTo(models.general_Project_, { foreignKey: "Project_"});
		general_Project__archive_.belongsTo(models.general_archive_Archive_, { foreignKey: "Archive__"});
	};
return general_Project__archive_


};
