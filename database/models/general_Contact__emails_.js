/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Contact__emails_ =  sequelize.define('general_Contact__emails_', {
    emails_: {
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
    email_: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'general_Contact__emails_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emails_" },
        ]
      },
      {
        name: "emails_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emails_" },
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
        name: "email_",
        using: "BTREE",
        fields: [
          { name: "email_" },
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
	general_Contact__emails_.associate = models => {
		general_Contact__emails_.belongsTo(models.general_Contact_, { foreignKey: "Contact_"});
	};
return general_Contact__emails_


};
