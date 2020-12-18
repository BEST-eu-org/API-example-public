/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Lbg__johnnySettings_ =  sequelize.define('best_internal_Lbg__johnnySettings_', {
    johnnySettings_: {
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
    name_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    value_: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Lbg__johnnySettings_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "johnnySettings_" },
        ]
      },
      {
        name: "johnnySettings_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "johnnySettings_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "value_",
        using: "BTREE",
        fields: [
          { name: "value_" },
        ]
      },
    ]
  });
	best_internal_Lbg__johnnySettings_.associate = models => {
		best_internal_Lbg__johnnySettings_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
	};
return best_internal_Lbg__johnnySettings_


};
