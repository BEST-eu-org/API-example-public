/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Archive__administrators_ =  sequelize.define('general_archive_Archive__administrators_', {
    administrators_: {
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
    Person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_archive_Archive__administrators_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "administrators_" },
        ]
      },
      {
        name: "administrators_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "administrators_" },
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
        name: "Person_",
        using: "BTREE",
        fields: [
          { name: "Person_" },
        ]
      },
    ]
  });
	general_archive_Archive__administrators_.associate = models => {
		general_archive_Archive__administrators_.belongsTo(models.general_archive_Archive_, { foreignKey: "Archive_"});
		general_archive_Archive__administrators_.belongsTo(models.general_Person_, { foreignKey: "Person_"});
	};
return general_archive_Archive__administrators_


};
