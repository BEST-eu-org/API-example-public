/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_ActivityType_ =  sequelize.define('general_event_ActivityType_', {
    ActivityType_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    forCompanies_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_ActivityType_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ActivityType_" },
        ]
      },
      {
        name: "ActivityType_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ActivityType_" },
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
        name: "forCompanies_",
        using: "BTREE",
        fields: [
          { name: "forCompanies_" },
        ]
      },
    ]
  });
	general_event_ActivityType_.associate = models => {
		general_event_ActivityType_.hasMany(models.best_johnny_Activity__activities_, { foreignKey: "ActivityType_"});
		general_event_ActivityType_.hasMany(models.general_event_Activity_, { foreignKey: "type_"});
		general_event_ActivityType_.hasMany(models.general_event_Event__activities_, { foreignKey: "ActivityType_"});
		general_event_ActivityType_.hasMany(models.general_event_Event__companyActivities_, { foreignKey: "ActivityType_"});
	};
return general_event_ActivityType_


};
