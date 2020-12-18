/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_University__inNetworks_ =  sequelize.define('general_University__inNetworks_', {
    inNetworks_: {
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
    University_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    Network_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Network_',
        key: 'Network_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_University__inNetworks_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inNetworks_" },
        ]
      },
      {
        name: "inNetworks_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inNetworks_" },
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
        name: "University_",
        using: "BTREE",
        fields: [
          { name: "University_" },
        ]
      },
      {
        name: "Network_",
        using: "BTREE",
        fields: [
          { name: "Network_" },
        ]
      },
    ]
  });
	general_University__inNetworks_.associate = models => {
		general_University__inNetworks_.belongsTo(models.general_University_, { foreignKey: "University_"});
		general_University__inNetworks_.belongsTo(models.general_education_Network_, { foreignKey: "Network_"});
	};
return general_University__inNetworks_


};
