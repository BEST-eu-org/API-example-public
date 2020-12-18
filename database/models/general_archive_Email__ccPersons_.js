/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_archive_Email__ccPersons_ =  sequelize.define('general_archive_Email__ccPersons_', {
    ccPersons_: {
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
    Email_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_Email_',
        key: 'Email_'
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
    tableName: 'general_archive_Email__ccPersons_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ccPersons_" },
        ]
      },
      {
        name: "ccPersons_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ccPersons_" },
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
        name: "Email_",
        using: "BTREE",
        fields: [
          { name: "Email_" },
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
	general_archive_Email__ccPersons_.associate = models => {
		general_archive_Email__ccPersons_.belongsTo(models.general_archive_Email_, { foreignKey: "Email_"});
		general_archive_Email__ccPersons_.belongsTo(models.general_Person_, { foreignKey: "Person_"});
	};
return general_archive_Email__ccPersons_


};
