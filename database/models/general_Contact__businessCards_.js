/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Contact__businessCards_ =  sequelize.define('general_Contact__businessCards_', {
    businessCards_: {
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
    businessCard_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Contact__businessCards__businessCard_',
        key: 'businessCard_'
      }
    },
    Contact_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Contact_',
        key: 'Contact_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Contact__businessCards_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessCards_" },
        ]
      },
      {
        name: "businessCards_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "businessCards_" },
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
        name: "businessCard_",
        using: "BTREE",
        fields: [
          { name: "businessCard_" },
        ]
      },
      {
        name: "Contact_",
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
    ]
  });
	general_Contact__businessCards_.associate = models => {
		general_Contact__businessCards_.belongsTo(models.general_Contact__businessCards__businessCard_, { foreignKey: "businessCard_"});
		general_Contact__businessCards_.belongsTo(models.general_Contact_, { foreignKey: "Contact_"});
	};
return general_Contact__businessCards_


};
