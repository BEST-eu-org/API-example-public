/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Organisation_ =  sequelize.define('general_Organisation_', {
    Organisation_: {
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
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "name_"
    },
    logo_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    },
    url_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Organisation_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Organisation_" },
        ]
      },
      {
        name: "Organisation_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Organisation_" },
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
      {
        name: "logo_",
        using: "BTREE",
        fields: [
          { name: "logo_" },
        ]
      },
      {
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
    ]
  });
	general_Organisation_.associate = models => {
		general_Organisation_.hasMany(models.best_contactdb_Contact__organisations_, { foreignKey: "Organisation_"});
		general_Organisation_.hasMany(models.best_internal_training_Session__organisation_, { foreignKey: "Organisation__"});
		general_Organisation_.belongsTo(models.general_Image_, { foreignKey: "logo_"});
		general_Organisation_.hasMany(models.general_event_Event__otherOrganisations_, { foreignKey: "Organisation_"});
	};
return general_Organisation_


};
