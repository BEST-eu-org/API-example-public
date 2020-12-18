/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_LbgApplication__budget_ =  sequelize.define('best_internal_LbgApplication__budget_', {
    budget_: {
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
    LbgApplication_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_LbgApplication_',
        key: 'LbgApplication_'
      }
    },
    File_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_LbgApplication__budget_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "budget_" },
        ]
      },
      {
        name: "budget_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "budget_" },
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
        name: "LbgApplication_",
        using: "BTREE",
        fields: [
          { name: "LbgApplication_" },
        ]
      },
      {
        name: "File_",
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
    ]
  });
	best_internal_LbgApplication__budget_.associate = models => {
		best_internal_LbgApplication__budget_.belongsTo(models.best_internal_LbgApplication_, { foreignKey: "LbgApplication_"});
		best_internal_LbgApplication__budget_.belongsTo(models.general_archive_File_, { foreignKey: "File_"});
	};
return best_internal_LbgApplication__budget_


};
