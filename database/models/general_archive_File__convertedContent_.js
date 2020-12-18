/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_File__convertedContent_ =  sequelize.define('general_archive_File__convertedContent_', {
    convertedContent_: {
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
    text_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    length_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_archive_File__convertedContent_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "convertedContent_" },
        ]
      },
      {
        name: "convertedContent_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "convertedContent_" },
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
        name: "length_",
        using: "BTREE",
        fields: [
          { name: "length_" },
        ]
      },
    ]
  });
	general_archive_File__convertedContent_.associate = models => {
		general_archive_File__convertedContent_.hasMany(models.general_archive_File_, { foreignKey: "convertedContent_"});
	};
return general_archive_File__convertedContent_


};
