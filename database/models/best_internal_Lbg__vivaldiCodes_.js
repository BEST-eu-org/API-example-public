/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Lbg__vivaldiCodes_ =  sequelize.define('best_internal_Lbg__vivaldiCodes_', {
    vivaldiCodes_: {
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
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    chunk_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Lbg__vivaldiCodes_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vivaldiCodes_" },
        ]
      },
      {
        name: "vivaldiCodes_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vivaldiCodes_" },
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
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
        ]
      },
      {
        name: "chunk_",
        using: "BTREE",
        fields: [
          { name: "chunk_" },
        ]
      },
    ]
  });
	best_internal_Lbg__vivaldiCodes_.associate = models => {
		best_internal_Lbg__vivaldiCodes_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
	};
return best_internal_Lbg__vivaldiCodes_


};
