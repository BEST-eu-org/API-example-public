/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Label_ =  sequelize.define('general_archive_Label_', {
    Label_: {
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
      allowNull: true,
      unique: "name_"
    }
  }, {
    sequelize,
    tableName: 'general_archive_Label_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Label_" },
        ]
      },
      {
        name: "Label_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Label_" },
        ]
      },
      {
        name: "name_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name_" },
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
    ]
  });
	general_archive_Label_.associate = models => {
		general_archive_Label_.hasMany(models.general_archive_Archive__tags_, { foreignKey: "tag_"});
		general_archive_Label_.hasMany(models.general_archive_Category__labels_, { foreignKey: "Label_"});
		general_archive_Label_.hasMany(models.general_archive_File__tags_, { foreignKey: "Label_"});
	};
return general_archive_Label_


};
