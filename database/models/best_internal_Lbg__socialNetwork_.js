/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Lbg__socialNetwork_ =  sequelize.define('best_internal_Lbg__socialNetwork_', {
    socialNetwork_: {
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_Lbg__socialNetwork_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "socialNetwork_" },
        ]
      },
      {
        name: "socialNetwork_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "socialNetwork_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "link_",
        using: "BTREE",
        fields: [
          { name: "link_" },
        ]
      },
      {
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
        ]
      },
    ]
  });
	best_internal_Lbg__socialNetwork_.associate = models => {
		best_internal_Lbg__socialNetwork_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
	};
return best_internal_Lbg__socialNetwork_


};
